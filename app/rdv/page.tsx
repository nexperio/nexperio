import { redirect } from 'next/navigation'

const CALENDLY_URL =
  'https://calendly.com/nexperio-france/l-ordonnance-express-du-docteur-digital'

export default function RdvPage() {
  redirect(CALENDLY_URL)
}
