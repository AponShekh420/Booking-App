import { z } from 'zod'

export const AccountDetailsSchema = z.object({
	fullname: z.string().min(1, { message: 'first and last name is required' }),
	email: z.string().email({ message: 'Invalid email address' }),
	phoneNumber: z
		.string()
		.regex(/^\+?[1-9]\d{1,14}$/, { message: 'Invalid phone number format' }),
	streetNumber: z.string().min(1, { message: 'Street number is required' }),
	roadAndStreet: z
		.string()
		.min(1, { message: 'street and street are required' }),
	city: z.string().min(1, { message: 'City is required' }),
	zipCode: z
		.string()
		.regex(/^[A-Za-z0-9\s\-]{3,10}$/, { message: 'Invalid zip code format' }),
	birthDay: z
		.string()
		.regex(/^\d{4}-\d{2}-\d{2}$/, {
			message: 'Invalid date format (YYYY-MM-DD)',
		})
		.refine((date) => !isNaN(new Date(date).getTime()), {
			message: 'Invalid date',
		}),
})

export type AccountDetailsType = z.infer<typeof AccountDetailsSchema>
