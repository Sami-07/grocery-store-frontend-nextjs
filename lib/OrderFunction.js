export async function OrderFunction(data) {
    const response = await fetch(`/api/delivery`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    });
}