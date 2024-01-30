import { writeFileSync } from "fs";
import WS from "websocket";

const main = () => {
  const ws = new WS.w3cwebsocket("wss://kusama.rpc.robonomics.network/");
  ws.onopen = () => {
    ws.send(
      '{"id":"1","jsonrpc":"2.0","method":"state_getMetadata","params":[]}'
    );
  };

  ws.onmessage = msg => {
    writeFileSync(`./metadata.json`, msg.data);
    console.log(`metadata fetched!`);
    process.exit(0);
  };
};

main();
