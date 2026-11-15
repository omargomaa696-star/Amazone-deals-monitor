export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://www.amazon.eg/"
    );

    return res.status(200).json({
      status: "running",
      amazon: response.ok ? "reachable" : "unavailable",
      message: "Amazon Deals Monitor is running"
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message
    });
  }
}
