from fastapi import FastAPI

app = FastAPI()

from views import background_tasks, hello, pydantic_validation, url_enum