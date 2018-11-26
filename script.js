import http from "k6/http";
import { sleep } from "k6";

export let options = {
  vus: 1000,
  duration: "15s",
  
};

export default function () {
  http.get("http://localhost:3004/123/reviews");
  sleep(1);
};