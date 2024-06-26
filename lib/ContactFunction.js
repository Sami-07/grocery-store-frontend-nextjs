export async function ContactFunction(data) {
    const response = await fetch(`/api/contact`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    });
}