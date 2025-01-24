import { z } from 'zod'

export const PaymentSchema = z.object({
	cardHolder: z.string().min(1, { message: 'Cardholder name is required' }),
	cardNumber: z
		.string()
		.regex(/^\d{16}$/, { message: 'Card number must be 16 digits' }),
	cardExpiry: z.string().regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, {
		message: 'Invalid expiry date format (MM/YY)',
	}),
	cvv: z.string().regex(/^\d{3,4}$/, { message: 'CVV must be 3 or 4 digits' }),
	postCode: z
		.string()
		.min(1, { message: 'Postcode is required' })
		.regex(/^[A-Za-z0-9\s\-]{3,10}$/, { message: 'Invalid postcode format' }),
})

export type PaymentType = z.infer<typeof PaymentSchema>
