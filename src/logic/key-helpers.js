
import jwt from 'jsonwebtoken-promisified';
// We don't need jsonwebtoken here - it's just a test of a non-native Promise returning function!

const genPubKey = (privKey)=> {
  return privKey.slice(0, -8);
};


async function genKeys (seed, timer) {
  const keys= {
    priv : 'supersecret...sssh!'
  };

  if (seed) {
    keys.priv = seed;
    // do reseed
  };

  while (true) {
    let jwtP = await jwt.signAsync('payload', 'secretOrPrivateKey');
    console.log('After ',new Date()-timer,'ms, will yield: ',jwtP);
    return jwtP;
  }
};

export { genKeys }
