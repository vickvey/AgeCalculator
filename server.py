from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Serve the public directory for static files like CSS, JS, images, etc.
app.mount("/public", StaticFiles(directory="public"), name="public")

@app.get("/", response_class=FileResponse)
async def read_index():
    return "public/index.html"
