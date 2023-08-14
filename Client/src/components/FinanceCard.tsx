import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface FinanceCardProps {
  sum: number
  title: string
}

export const FinanceCard = ({ sum, title }: FinanceCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent>
        <h3>{sum}</h3>
      </CardContent>
    </Card>
  )
}
