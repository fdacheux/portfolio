import os
import re
import sys

# Configuration
DIRECTORIES_TO_SCAN = ['.']
DIRECTORIES_TO_IGNORE = ['.git', 'node_modules', 'venv', '__pycache__', '.next', 'build']
FILES_TO_IGNORE = ['security_check.py', 'package-lock.json']

# Regex patterns for common secrets
SECRET_PATTERNS = {
    "AWS Access Key": r"AKIA[0-9A-Z]{16}",
    "Generic Secret/Token": r"(?i)(api_key|secret|password|token)\s*[:=]\s*['\"][a-zA-Z0-9\-_]{16,}['\"]",
    "Private Key": r"-----BEGIN (RSA|OPENSSH|DSA|EC|PGP) PRIVATE KEY-----"
}

# Files that should never be pushed
FORBIDDEN_FILES = ['.env', '.env.local', 'credentials.json']

def check_for_secrets():
    issues_found = 0

    for root, dirs, files in os.walk(DIRECTORIES_TO_SCAN[0]):
        # Modify dirs in-place to skip ignored directories
        dirs[:] = [d for d in dirs if d not in DIRECTORIES_TO_IGNORE]

        for file in files:
            if file in FILES_TO_IGNORE:
                continue
            
            file_path = os.path.join(root, file)

            # 1. Check for forbidden files
            if file in FORBIDDEN_FILES:
                print(f"🚨 SECURITY ALERT: Forbidden file found: {file_path}")
                issues_found += 1
                continue

            # 2. Check file contents for secret patterns
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    for name, pattern in SECRET_PATTERNS.items():
                        matches = re.finditer(pattern, content)
                        for match in matches:
                            # Print a redacted version of the finding
                            matched_text = match.group(0)
                            redacted = matched_text[:10] + "..." + matched_text[-4:] if len(matched_text) > 14 else "***"
                            print(f"🚨 SECURITY ALERT: {name} detected in {file_path}")
                            print(f"   -> {redacted}")
                            issues_found += 1
            except (UnicodeDecodeError, PermissionError):
                # Skip binary or unreadable files
                pass

    return issues_found

if __name__ == "__main__":
    print("Running pre-push security checks...")
    total_issues = check_for_secrets()
    
    if total_issues > 0:
        print(f"\n❌ Push aborted: {total_issues} security issue(s) found.")
        print("Please remove the secrets, commit the changes, and try pushing again.")
        sys.exit(1) # Exit code 1 tells Git to abort the push
    else:
        print("✅ Security checks passed! No exposed secrets found.")
        sys.exit(0) # Exit code 0 tells Git to proceed