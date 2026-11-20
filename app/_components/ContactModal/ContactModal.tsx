'use client'

import { useEffect, useRef, useState, type SubmitEvent } from 'react'

export const OPEN_CONTACT_MODAL_EVENT = 'open-contact-modal'

export function openContactModal() {
  window.dispatchEvent(new CustomEvent(OPEN_CONTACT_MODAL_EVENT))
}

function ContactModal() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [isSent, setIsSent] = useState(false)
  const [copyLabel, setCopyLabel] = useState('Copier')
  const [submitError, setSubmitError] = useState('')
  const [mailClient, setMailClient] = useState<'gmail' | 'system'>('gmail')

  const closeModal = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    dialogRef.current?.close()
    setIsSent(false)
    setSubmitError('')
  }

  useEffect(() => {
    const dialog = dialogRef.current
    const openModal = () => {
      setIsSent(false)
      setSubmitError('')
      setCopyLabel('Copier')
      if (dialog && !dialog.open) dialog.showModal()
    }

    window.addEventListener(OPEN_CONTACT_MODAL_EVENT, openModal)
    return () => {
      window.removeEventListener(OPEN_CONTACT_MODAL_EVENT, openModal)
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    }
  }, [])

  const copyEmail = async () => {
    await navigator.clipboard.writeText('fanny.dacheux@gmail.com')
    setCopyLabel('Copié')
  }

  const submitContactForm = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const name = (form.elements.namedItem('contact-name') as HTMLInputElement).value.trim()
    const email = (form.elements.namedItem('contact-email') as HTMLInputElement).value.trim()
    const message = (form.elements.namedItem('contact-message') as HTMLTextAreaElement).value.trim()

    const subject = encodeURIComponent(`Contact de ${name}`)
    const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\n${message}`)

    setIsSent(true)

    if (mailClient === 'gmail') {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent('fanny.dacheux@gmail.com')}&su=${subject}&body=${body}`
      const gmailWindow = window.open(gmailUrl, '_blank')

      if (gmailWindow) {
        gmailWindow.opener = null
        closeTimerRef.current = setTimeout(closeModal, 300)
      } else {
        setIsSent(false)
        setSubmitError('Autorisez les fenêtres Gmail dans votre navigateur, puis réessayez.')
      }
      return
    }

    window.location.href = `mailto:fanny.dacheux@gmail.com?subject=${subject}&body=${body}`
    closeTimerRef.current = setTimeout(closeModal, 300)
  }

  return (
    <dialog
      ref={dialogRef}
      id="contact-modal"
      className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none border-0 bg-transparent p-0"
      aria-labelledby="modal-title"
      onCancel={(event) => {
        event.preventDefault()
        closeModal()
      }}
    >
      <div
        className="flex min-h-dvh w-full items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm"
        onClick={(event) => {
          if (event.target === event.currentTarget) closeModal()
        }}
      >
        <div
          className="relative w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl sm:p-8"
        >
          <button
            type="button"
            onClick={closeModal}
            className="absolute right-5 top-5 rounded-xl p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-900"
            aria-label="Fermer"
          >
            <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h3 id="modal-title" className="text-2xl font-extrabold text-slate-900">
            Contacter Fanny Dacheux
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Votre application mail s'ouvrira pour envoyer le message.
          </p>

          <div className="mt-4 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5">
            <span className="truncate text-sm font-semibold text-slate-800">fanny.dacheux@gmail.com</span>
            <button type="button" onClick={copyEmail} className="ml-2 shrink-0 rounded-lg bg-red-50 px-3 py-1.5 text-xs font-bold text-red-600 hover:bg-red-100 hover:text-red-700">
              {copyLabel}
            </button>
          </div>

          <form onSubmit={submitContactForm} className="mt-5 space-y-4">
            <div>
              <label htmlFor="mail-client" className="mb-1 block text-xs font-bold text-slate-700">
                Application mail
              </label>
              <select
                id="mail-client"
                value={mailClient}
                onChange={(event) => setMailClient(event.target.value as 'gmail' | 'system')}
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="gmail">Gmail (nouvel onglet)</option>
                <option value="system">Application mail par défaut</option>
              </select>
            </div>
            <div>
              <label htmlFor="contact-name" className="mb-1 block text-xs font-bold text-slate-700">Votre nom</label>
              <input name="contact-name" type="text" id="contact-name" required className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-1 block text-xs font-bold text-slate-700">Votre email</label>
              <input name="contact-email" type="email" id="contact-email" required className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-1 block text-xs font-bold text-slate-700">Votre message</label>
              <textarea name="contact-message" id="contact-message" rows={3} required className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            {submitError && (
              <p role="alert" className="text-sm font-medium text-red-600">
                {submitError}
              </p>
            )}
            <button type="submit" disabled={isSent} className="w-full rounded-xl btn-primary py-3 text-sm font-semibold text-white shadow-md disabled:cursor-default disabled:opacity-80">
              {isSent ? 'Message envoyé' : 'Envoyer le message'}
            </button>
          </form>
        </div>
      </div>
    </dialog>
  )
}

export default ContactModal
