import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { account_number, bank_code, amount, name } = await req.json();

  // 1. Create a Transfer Recipient on Paystack
  const recipientRes = await fetch('https://api.paystack.co/transferrecipient', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      type: "nuban",
      name: name,
      account_number: account_number,
      bank_code: bank_code,
      currency: "NGN"
    }),
  });

  const recipientData = await recipientRes.json();

  // 2. Initiate the Transfer
  const transferRes = await fetch('https://api.paystack.co/transfer', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      source: "balance",
      amount: amount * 100, // Kobo
      recipient: recipientData.data.recipient_code,
      reason: "FixAm Artisan Withdrawal"
    }),
  });

  const transferData = await transferRes.json();
  return NextResponse.json(transferData);
}
