export default function formatPrice(value: number | string) {
    const valueString = value.toString();
    const priceInNumber = parseFloat(valueString);
    const formattedPrice = priceInNumber.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 0,
    });
    return formattedPrice
};
