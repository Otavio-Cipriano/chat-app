export default function convertToMessageDate() {
    return new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
        hour: '2-digit',
        minute:"2-digit",
    }).replace(',','')
}
