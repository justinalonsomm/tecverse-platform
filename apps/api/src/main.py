from fastapi import FastAPI

app = FastAPI(
    title="TEC Innovation Labs API",
    version="1.0.0"
)

@app.get("/")
async def root():
    return {
        "message": "TEC Innovation Labs API Running"
    }