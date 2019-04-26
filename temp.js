function addHookFor(movieName, multipleOfThirtySeconds) {
  multipleOfThirtySeconds = multipleOfThirtySeconds || 2;

  var scriptContents = [
    'var movieName = "' + movieName + '"',
    'var multipleOfThirtySeconds = ' + multipleOfThirtySeconds.toString(),
    "function reloadWindow() { setTimeout(function() {window.location.reload();}" + "," + multipleOfThirtySeconds * 30000 + ");}",

    (function getMovie() {
      var productClickArray = window.productClickArray;

      var moviesName = productClickArray.map(function (data) {
        return data.ecommerce.click.products.filter(function (movieData) {
          return movieData.category === 'MT';
        }).map(function (movieData) {
          return movieData.name;
        });
      }).reduce(function (list, movieList) {
        list = list.concat(movieList);
        return list;
      }, []);

      for (var i = 0; i < moviesName.length; i++) {
        if (moviesName[i].toLowerCase().indexOf(movieName.toLowerCase()) > -1) {
          return moviesName[i];
        }
      }

      return false;
    }).toString(),

    (function start() {
      var movie = getMovie();
      if (movie) {
        var message = 'Ab "' + movie + '" book kar le fatafat';
        var title = "Aa gayi movie " + movie;

        function notifyMe() {
          if (!("Notification" in window)) {
            alert("This browser does not support desktop notification");
          } else if (Notification.permission === "granted") {
            navigator.serviceWorker.ready.then(function (registration) {
              registration.showNotification(title, {
                body: message
              })
            });

          } else if (Notification.permission !== "denied") {
            Notification.requestPermission(function (result) {
              if (result === 'granted') {
                navigator.serviceWorker.ready.then(function (registration) {
                  registration.showNotification(title, {
                    body: message
                  });
                });
              }
            });
          }
        }

        notifyMe();
      } else {
        reloadWindow();
      }
    }).toString(),
    'start();'
  ];

  var script = document.createElement('script');
  script.appendChild(document.createTextNode(scriptContents.join('\n')));
  (document.body || document.head || document.documentElement).appendChild(script);

}

addHookFor('234', 1);