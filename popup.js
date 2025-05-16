const API_ENDPOINT = "https://your-backend-endpoint.com/api/ask";

document.getElementById('analyze').addEventListener('click', async () => {
  const input = document.getElementById('input').value;
  const riskLevel = document.getElementById('riskLevel').value;
  const timeFrame = document.getElementById('timeFrame').value;
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = "Analyzing...";

  try {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: input,
        risk: riskLevel,
        time: timeFrame
      })
    });
    const data = await response.json();
    resultDiv.textContent = data?.result || "No response from AI.";
  } catch (err) {
    resultDiv.textContent = "Error contacting the backend.";
  }
});