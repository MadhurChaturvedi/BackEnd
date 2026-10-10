import crypto, { randomBytes } from  "node:crypto";

// bult in node js module 

// security related task
// creating rendom UUID , IDS
// creating secure token 
// hashing data
// to verify of the data was not changed
// encript/decript



const requestID =  crypto.randomUUID();
console.log(`This is ID - ${requestID}`)


// rendom bytes
// password reset token 
// email verifyication
// session secret , api keys

// randomBytes(16);
const restToken  = crypto.randomBytes(16).toString("hex")
console.log(restToken)

// crypyo.createHash
// hello -->
const text = "hello world";
const hash = crypto.createHash("sha256").update(text).digest("hex")
console.log(hash)

// crypto.createHmac
// normal hash : data-> hash
// HAMC: data + secret -> signed hash
// webhook
// signed tokens

const secretKey = "my-super-secret-key"
const message = "useer-1"

const signature = crypto.createHmac('sha256',secretKey).update(message).digest("hex")
console.log(signature)
const signatureVerify = crypto.createHmac("sha256",secretKey).update(message).digest("hex")
console.log(signatureVerify === signature)