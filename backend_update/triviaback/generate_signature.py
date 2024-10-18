from eth_account import Account
from eth_account.messages import encode_defunct

# Replace this with your private key (DO NOT SHARE YOUR PRIVATE KEY)
private_key = "0x3d8f74b48b365f713e37de22030a2f7c2b4af7d0e538529ffda1d53fa0bbb806"

# Replace this with the nonce you received from the server
nonce = "2568f7eacd8aa267be7e124e85131aaf"

# Create the message to be signed
message = encode_defunct(text=nonce)

# Sign the message using the private key
signed_message = Account.sign_message(message, private_key=private_key)

# Extract the signature
signature = signed_message.signature

print("Signature:", signature.hex())
