from app import app


@app.get("/")
async def read_main():
    return {"msg": "Hello World"}
