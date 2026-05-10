export const dynamic = 'force-dynamic';
export const dynamic = 'force-dynamic';
export const dynamic = 'force-dynamic';
'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
// Add your other existing imports here (e.g., supabase, etc.)

function VerifyPaymentContent() {
  const searchParams = useSearchParams()
  const reference = searchParams.get('reference')

  return (
    <div>
      <h1>Verifying Payment...</h1>
      <p>Reference: {reference}</p>
      {/* Your existing payment logic goes here */}
    </div>
  )
}

export default function VerifyPaymentPage() {
  return (
    <Suspense fallback={<div>Loading verification...</div>}>
      <VerifyPaymentContent />
    </Suspense>
  )
}
