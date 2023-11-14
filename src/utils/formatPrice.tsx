export default function formatPrice(value: number) {
    const valueString = value.toString();
    const priceInNumber = parseFloat(valueString); // Converter a string para um número
    const formattedPrice = priceInNumber.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 0,
    });
    return formattedPrice 
}