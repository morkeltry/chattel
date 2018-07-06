
import jwt from 'jsonwebtoken-promisified';
// We don't need jsonwebtoken here - it's just a test of a non-native Promise returning function!

const genPubKey = (privKey)=> {
  return privKey.slice(0, -8);
};


async function genKeys (seed) {
  const keys= {
    priv : 'supersecret...sssh!'
  };

  if (seed) {
    keys.priv = seed;
    // do reseed
  };

  while (true) {
    await jwt.signAsync('payload', 'secretOrPrivateKey');
    keys.pub = genPubKey (keys.priv);
    console.log('After ? ms, will yield: ',keys.toString());
    return keys;
  }
};

export { genKeys }
