/** 
 * Copyright (c) 2017 Callan Peter Milne
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above 
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 * OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */

app.run(logSession);

logSession.$inject = ['TrackingMessage', 'messageSender', '$window', '$appEnvironment'];
function logSession (  TrackingMessage,   messageSender,   $window,   $appEnvironment) {

  const UNKNOWN = '_UNKNOWN';

  let message = new TrackingMessage();
  let messageMetrics = message.metrics;

  messageMetrics.setData('UserAgent', $window.navigator.userAgent || UNKNOWN);
  messageMetrics.setData('Platform', $window.navigator.platform || UNKNOWN);
  messageMetrics.setData('Vendor', $window.navigator.vendor || UNKNOWN);
  messageMetrics.setData('Timestamp', Date.now());
  messageMetrics.setData('LocalTime', String(new Date()));
  messageMetrics.setData('Hostname', $appEnvironment.hostname);
  messageMetrics.setData('EnvironmentName', $appEnvironment.environmentName);

  messageSender
    .send(message)
    .then(response => {

    })
    .catch(error => {

    });

};
