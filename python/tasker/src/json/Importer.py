import json
from json import encoder


class Importer:

    def __init__(self):
        pass

    def read_tasks(self):
        # TODO odczytaj plik i zdekoduj treść tutaj
        with open('taski.json', 'r', encoding="utf-8") as file:
            self.data = json.loads(file.read())
        

    def get_tasks(self):
        # TODO zwróć zdekodowane taski tutaj
        return self.data