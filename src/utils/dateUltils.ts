import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function formatDate(date: string) {
    if (!date) return

    const formatDate = new Date(date)

    return formatDistanceToNow(formatDate, {
        addSuffix: true,
        locale: ptBR
    })
}
