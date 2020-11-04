import log from "./log";

export default function printMe() {
    log('I get called from print.js and log.js!')
    throw 'error69';
}