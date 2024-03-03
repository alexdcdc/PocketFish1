import requests
import json

res = requests.get("https://stockfish.online/api/stockfish.php", params = {"fen": "r2q1rk1/ppp2ppp/3bbn2/3p4/8/1B1P4/PPP2PPP/RNB1QRK1 w - - 5 11", "depth": 10, "mode": "bestmove"})

print(res.json()["data"])