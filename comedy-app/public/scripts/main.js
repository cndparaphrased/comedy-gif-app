(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var possibleResults = {};

possibleResults.arrestedDevelopment = {
  toughLove: ['assets/arrested/tough01.gif', 'assets/arrested/tough02.gif', 'assets/arrested/tough03.gif', 'assets/arrested/tough04.gif'],

  inspiration: ['assets/arrested/inspo01.gif', 'assets/arrested/inspo02.gif', 'assets/arrested/inspo03.gif'],

  snark: ['assets/arrested/snark01.gif', 'assets/arrested/snark02.gif', 'assets/arrested/snark03.gif', 'assets/arrested/snark04.gif'],

  advice: ['assets/arrested/advice01.gif', 'assets/arrested/advice02.gif', 'assets/arrested/advice03.gif', 'assets/arrested/advice04.gif', 'assets/arrested/advice05.gif'],

  cant: ['assets/arrested/cant01.gif', 'assets/arrested/cant02.gif', 'assets/arrested/cant03.gif', 'assets/arrested/cant04.gif', 'assets/arrested/cant05.gif'],

  yay: ['assets/arrested/yay01.gif', 'assets/arrested/yay02.gif']
}, possibleResults.brooklynNineNine = {
  toughLove: ['assets/brooklyn/tough01.gif', 'assets/brooklyn/tough02.gif', 'assets/brooklyn/tough03.gif', 'assets/brooklyn/tough04.gif', 'assets/brooklyn/tough05.gif'],
  inspiration: ['assets/brooklyn/inspo01.gif', 'assets/brooklyn/inspo02.gif', 'assets/brooklyn/inspo03.gif', 'assets/brooklyn/inspo04.gif'],
  snark: ['assets/brooklyn/snark01.gif', 'assets/brooklyn/snark02.gif', 'assets/brooklyn/snark03.gif', 'assets/brooklyn/snark04.gif'],
  advice: ['assets/brooklyn/advice01.gif', 'assets/brooklyn/advice02.gif', 'assets/brooklyn/advice03.gif', 'assets/brooklyn/advice04.gif', 'assets/brooklyn/advice05.gif'],
  cant: ['assets/brooklyn/cant01.gif', 'assets/brooklyn/cant02.gif', 'assets/brooklyn/cant03.gif', 'assets/brooklyn/cant04.gif'],
  yay: ['assets/brooklyn/yay01.gif', 'assets/brooklyn/yay02.gif']
}, possibleResults.community = {
  toughLove: ['assets/community/tough01.gif', 'assets/community/tough02.gif', 'assets/community/tough03.gif', 'assets/community/tough04.gif', 'assets/community/tough05.gif'],

  inspiration: ['assets/community/inspo01.gif', 'assets/community/inspo02.gif', 'assets/community/inspo03.gif', 'assets/community/inspo04.gif', 'assets/community/inspo05.gif', 'assets/community/inspo06.gif'],

  snark: ['assets/community/snark01.gif', 'assets/community/snark02.gif', 'assets/community/snark03.gif', 'assets/community/snark04.gif', 'assets/community/snark05.gif', 'assets/community/snark06.gif'],
  advice: ['assets/community/advice01.gif', 'assets/community/advice02.gif', 'assets/community/advice03.gif', 'assets/community/advice04.gif'],
  cant: ['assets/community/cant01.gif', 'assets/community/cant02.gif', 'assets/community/cant03.gif', 'assets/community/cant04.gif', 'assets/community/cant05.gif'],
  yay: ['assets/community/yay01.gif', 'assets/community/yay02.gif', 'assets/community/yay03.gif', 'assets/community/yay04.gif', 'assets/community/yay05.gif']
}, possibleResults.theOffice = {
  toughLove: ['assets/office/tough01.gif', 'assets/office/tough02.gif', 'assets/office/tough03.gif', 'assets/office/tough04.gif', 'assets/office/tough05.gif'],

  inspiration: ['assets/office/inspo01.gif', 'assets/office/inspo02.gif'],

  snark: ['assets/office/snark01.gif', 'assets/office/snark02.gif', 'assets/office/snark03.gif', 'assets/office/snark04.gif', 'assets/office/snark05.gif'],

  advice: ['assets/office/advice01.gif', 'assets/office/advice02.gif', 'assets/office/advice03.gif'],

  cant: ['assets/office/cant01.gif', 'assets/office/cant02.gif', 'assets/office/cant03.gif'],

  yay: ['assets/office/yay01.gif', 'assets/office/yay02.gif', 'assets/office/yay03.gif', 'assets/office/yay04.gif']
}, possibleResults.thirtyRock = {
  toughLove: ['assets/thirty/tough01.gif', 'assets/thirty/tough02.gif', 'assets/thirty/tough03.gif', 'assets/thirty/tough04.gif'],

  inspiration: ['assets/thirty/inspo01.gif', 'assets/thirty/inspo02.gif', 'assets/thirty/inspo03.gif', 'assets/thirty/inspo04.gif'],

  snark: ['assets/thirty/snark01.gif', 'assets/thirty/snark02.gif', 'assets/thirty/snark03.gif'],
  advice: ['assets/thirty/advice01.gif', 'assets/thirty/advice02.gif', 'assets/thirty/advice03.gif', 'assets/thirty/advice04.gif'],
  cant: ['assets/thirty/cant01.gif', 'assets/thirty/cant02.gif', 'assets/thirty/cant03.gif', 'assets/thirty/cant04.gif', 'assets/thirty/cant05.gif'],
  yay: ['assets/thirty/yay01.gif', 'assets/thirty/yay02.gif', 'assets/thirty/yay03.gif', 'assets/thirty/yay04.gif', 'assets/thirty/yay05.gif']
}, possibleResults.parksAndRec = {
  toughLove: ['assets/parks/tough01.gif', 'assets/parks/tough02.gif', 'assets/parks/tough03.gif', 'assets/parks/tough04.gif', 'assets/parks/tough05.gif'],

  inspiration: ['assets/parks/inspo01.gif', 'assets/parks/inspo02.gif', 'assets/parks/inspo03.gif', 'assets/parks/inspo04.gif'],

  snark: ['assets/parks/snark01.gif', 'assets/parks/snark02.gif', 'assets/parks/snark03.gif', 'assets/parks/snark04.gif', 'assets/parks/snark05.gif'],

  advice: ['assets/parks/advice01.gif', 'assets/parks/advice02.gif', 'assets/parks/advice03.gif', 'assets/parks/advice04.gif'],

  cant: ['assets/parks/cant01.gif', 'assets/parks/cant02.gif', 'assets/parks/cant03.gif', 'assets/parks/cant04.gif'],

  yay: ['assets/parks/yay01.gif', 'assets/parks/yay02.gif', 'assets/parks/yay03.gif', 'assets/parks/yay04.gif']
};

var app = {};

app.detectSize = function () {
  $(window).on('resize', function () {
    var width = $(window).width();
    if (width <= 750) {
      $('.nav').removeClass().addClass('nav sliderNav--small');
      // location.reload();
      app.smallerScreen();
    } else {
      $('.nav').removeClass().addClass('nav sliderNav');
      app.fullScreen();
    }
  });

  if (window.matchMedia('(max-width: 750px)').matches) {
    $('.nav').addClass('sliderNav--small');
    app.smallerScreen();
  } else {
    $('.nav').addClass('sliderNav');
    app.fullScreen();
  }
};

app.slider = function () {
  $('.sliderNav--tvShow').addClass('sliderNav__links--active');
  $('.btn--tvShow').addClass('btn--active');
  $('ul').eq(0).addClass('sliderContent--current');

  $('.sliderNav__links').on('click', function () {
    var currentIndex = $(this).index();
    var currentContent = $('ul').get(currentIndex);

    $('ul').removeClass('sliderContent--current');

    if (currentIndex === 0) {
      $(currentContent).removeClass().addClass('sliderContent sliderContent--current tvShow moveFromLeft');
      $('ul').eq(1).addClass('moveToRight');
      $('ul').eq(2).addClass('moveToRight');
    } else if (currentIndex === 1) {
      $(currentContent).removeClass().addClass('sliderContent sliderContent--current feeling moveFromRight');
      $('ul').eq(0).addClass('moveToLeft');
      $('ul').eq(2).addClass('moveToRight');
    } else if (currentIndex === 2) {
      $(currentContent).removeClass().addClass('sliderContent sliderContent--current results moveFromRight');
      $('ul').eq(0).addClass('moveToLeft');
      $('ul').eq(1).addClass('moveToLeft');
    }

    $('.sliderNav__links').removeClass('sliderNav__links--active');
    $('.btn').removeClass('btn--active');
    $(this).addClass('sliderNav__links--active');
    $(this).children().addClass('btn--active');
  });
};

app.fullScreen = function () {
  $('.tvShow > li').on('click', function () {
    $('.tvShow').addClass('moveToLeft');
    $('.btn--tvShow').removeAttr('disabled').addClass('activated');
    $('.btn--feeling').removeAttr('disabled').trigger('click').addClass('sliderNav__links--active activated');
  });

  $('.feeling > li').on('click', function () {
    $('.feeling').addClass('moveToLeft');
    $('.btn--results').removeAttr('disabled').trigger('click').addClass('sliderNav__links--active activated');
  });
};

app.smallerScreen = function () {
  $('.tvShow > li').on('click', function () {
    $('.sliderNav__links:first-child').addClass('moveToLeft');
    $('.sliderNav__links:nth-child(2)').addClass('moveFromRight sliderNav__links--active');
    $('.btn--feeling').trigger('click');
  });

  $('.feeling > li').on('click', function () {
    $('.sliderNav__links:nth-child(2)').addClass('moveToLeft');
    $('.sliderNav__links:nth-child(3)').addClass('moveFromRight sliderNav__links--active');
    $('.btn--results').removeAttr('disabled').trigger('click');
  });
};

app.events = function () {
  $('form').on('submit', function (e) {
    $('.results .sliderContent__items').empty();
    e.preventDefault();
    $('.btn--results').val('Gif me another');

    var show = $('input[name=tv]:checked').val();
    var feeling = $('input[name=feels]:checked').val();

    for (var x in possibleResults) {
      if (x === show) {
        for (var y in possibleResults[show]) {
          if (y === feeling) {
            var finalChoice = possibleResults[show][feeling];
            var randomGif = finalChoice[Math.floor(Math.random() * finalChoice.length)];
            var image = $('<img>').attr('src', randomGif);
            $('.results .sliderContent__items').append(image);
          };
        };
      };
    };
  });
};

app.init = function () {
  app.detectSize();
  app.slider();
  app.events();
};

$(function () {
  app.init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFNLGtCQUFrQixFQUF4Qjs7QUFFQSxnQkFBZ0IsbUJBQWhCLEdBQXNDO0FBQ2xDLGFBQVcsQ0FDVCw2QkFEUyxFQUVULDZCQUZTLEVBR1QsNkJBSFMsRUFJVCw2QkFKUyxDQUR1Qjs7QUFRbEMsZUFBYSxDQUNYLDZCQURXLEVBRVgsNkJBRlcsRUFHWCw2QkFIVyxDQVJxQjs7QUFjbEMsU0FBTyxDQUNMLDZCQURLLEVBRUwsNkJBRkssRUFHTCw2QkFISyxFQUlMLDZCQUpLLENBZDJCOztBQXFCbEMsVUFBUSxDQUNOLDhCQURNLEVBRU4sOEJBRk0sRUFHTiw4QkFITSxFQUlOLDhCQUpNLEVBS04sOEJBTE0sQ0FyQjBCOztBQTZCbEMsUUFBTSxDQUNKLDRCQURJLEVBRUosNEJBRkksRUFHSiw0QkFISSxFQUlKLDRCQUpJLEVBS0osNEJBTEksQ0E3QjRCOztBQXFDbEMsT0FBSyxDQUNILDJCQURHLEVBRUgsMkJBRkc7QUFyQzZCLENBQXRDLEVBMkNBLGdCQUFnQixnQkFBaEIsR0FBbUM7QUFDL0IsYUFBVyxDQUNULDZCQURTLEVBRVQsNkJBRlMsRUFHVCw2QkFIUyxFQUlULDZCQUpTLEVBS1QsNkJBTFMsQ0FEb0I7QUFRL0IsZUFBYSxDQUNYLDZCQURXLEVBRVgsNkJBRlcsRUFHWCw2QkFIVyxFQUlYLDZCQUpXLENBUmtCO0FBYy9CLFNBQU8sQ0FDTCw2QkFESyxFQUVMLDZCQUZLLEVBR0wsNkJBSEssRUFJTCw2QkFKSyxDQWR3QjtBQW9CL0IsVUFBUSxDQUNOLDhCQURNLEVBRU4sOEJBRk0sRUFHTiw4QkFITSxFQUlOLDhCQUpNLEVBS04sOEJBTE0sQ0FwQnVCO0FBMkIvQixRQUFNLENBQ0osNEJBREksRUFFSiw0QkFGSSxFQUdKLDRCQUhJLEVBSUosNEJBSkksQ0EzQnlCO0FBaUMvQixPQUFLLENBQ0gsMkJBREcsRUFFSCwyQkFGRztBQWpDMEIsQ0EzQ25DLEVBa0ZBLGdCQUFnQixTQUFoQixHQUE0QjtBQUMxQixhQUFXLENBQ1QsOEJBRFMsRUFFVCw4QkFGUyxFQUdULDhCQUhTLEVBSVQsOEJBSlMsRUFLVCw4QkFMUyxDQURlOztBQVMxQixlQUFhLENBQ1gsOEJBRFcsRUFFWCw4QkFGVyxFQUdYLDhCQUhXLEVBSVgsOEJBSlcsRUFLWCw4QkFMVyxFQU1YLDhCQU5XLENBVGE7O0FBa0IxQixTQUFPLENBQ0wsOEJBREssRUFFTCw4QkFGSyxFQUdMLDhCQUhLLEVBSUwsOEJBSkssRUFLTCw4QkFMSyxFQU1MLDhCQU5LLENBbEJtQjtBQTBCMUIsVUFBUSxDQUNOLCtCQURNLEVBRU4sK0JBRk0sRUFHTiwrQkFITSxFQUlOLCtCQUpNLENBMUJrQjtBQWdDMUIsUUFBTSxDQUNKLDZCQURJLEVBRUosNkJBRkksRUFHSiw2QkFISSxFQUlKLDZCQUpJLEVBS0osNkJBTEksQ0FoQ29CO0FBdUMxQixPQUFLLENBQ0gsNEJBREcsRUFFSCw0QkFGRyxFQUdILDRCQUhHLEVBSUgsNEJBSkcsRUFLSCw0QkFMRztBQXZDcUIsQ0FsRjVCLEVBa0lBLGdCQUFnQixTQUFoQixHQUE0QjtBQUN4QixhQUFXLENBQ1QsMkJBRFMsRUFFVCwyQkFGUyxFQUdULDJCQUhTLEVBSVQsMkJBSlMsRUFLVCwyQkFMUyxDQURhOztBQVN4QixlQUFhLENBQ1gsMkJBRFcsRUFFWCwyQkFGVyxDQVRXOztBQWN4QixTQUFPLENBQ0wsMkJBREssRUFFTCwyQkFGSyxFQUdMLDJCQUhLLEVBSUwsMkJBSkssRUFLTCwyQkFMSyxDQWRpQjs7QUFzQnhCLFVBQVEsQ0FDTiw0QkFETSxFQUVOLDRCQUZNLEVBR04sNEJBSE0sQ0F0QmdCOztBQTRCeEIsUUFBTSxDQUNKLDBCQURJLEVBRUosMEJBRkksRUFHSiwwQkFISSxDQTVCa0I7O0FBa0N4QixPQUFLLENBQ0gseUJBREcsRUFFSCx5QkFGRyxFQUdILHlCQUhHLEVBSUgseUJBSkc7QUFsQ21CLENBbEk1QixFQTRLQSxnQkFBZ0IsVUFBaEIsR0FBNkI7QUFDM0IsYUFBVyxDQUNULDJCQURTLEVBRVQsMkJBRlMsRUFHVCwyQkFIUyxFQUlULDJCQUpTLENBRGdCOztBQVEzQixlQUFhLENBQ1gsMkJBRFcsRUFFWCwyQkFGVyxFQUdYLDJCQUhXLEVBSVgsMkJBSlcsQ0FSYzs7QUFlM0IsU0FBTyxDQUNMLDJCQURLLEVBRUwsMkJBRkssRUFHTCwyQkFISyxDQWZvQjtBQW9CM0IsVUFBUSxDQUNOLDRCQURNLEVBRU4sNEJBRk0sRUFHTiw0QkFITSxFQUlOLDRCQUpNLENBcEJtQjtBQTBCM0IsUUFBTSxDQUNKLDBCQURJLEVBRUosMEJBRkksRUFHSiwwQkFISSxFQUlKLDBCQUpJLEVBS0osMEJBTEksQ0ExQnFCO0FBaUMzQixPQUFLLENBQ0gseUJBREcsRUFFSCx5QkFGRyxFQUdILHlCQUhHLEVBSUgseUJBSkcsRUFLSCx5QkFMRztBQWpDc0IsQ0E1SzdCLEVBc05BLGdCQUFnQixXQUFoQixHQUE4QjtBQUMxQixhQUFXLENBQ1QsMEJBRFMsRUFFVCwwQkFGUyxFQUdULDBCQUhTLEVBSVQsMEJBSlMsRUFLVCwwQkFMUyxDQURlOztBQVMxQixlQUFhLENBQ1gsMEJBRFcsRUFFWCwwQkFGVyxFQUdYLDBCQUhXLEVBSVgsMEJBSlcsQ0FUYTs7QUFnQjFCLFNBQU8sQ0FDTCwwQkFESyxFQUVMLDBCQUZLLEVBR0wsMEJBSEssRUFJTCwwQkFKSyxFQUtMLDBCQUxLLENBaEJtQjs7QUF3QjFCLFVBQVEsQ0FDTiwyQkFETSxFQUVOLDJCQUZNLEVBR04sMkJBSE0sRUFJTiwyQkFKTSxDQXhCa0I7O0FBK0IxQixRQUFNLENBQ0oseUJBREksRUFFSix5QkFGSSxFQUdKLHlCQUhJLEVBSUoseUJBSkksQ0EvQm9COztBQXNDMUIsT0FBSyxDQUNILHdCQURHLEVBRUgsd0JBRkcsRUFHSCx3QkFIRyxFQUlILHdCQUpHO0FBdENxQixDQXROOUI7O0FBb1FBLElBQU0sTUFBTSxFQUFaOztBQUVBLElBQUksVUFBSixHQUFpQixZQUFNO0FBQ3JCLElBQUUsTUFBRixFQUFVLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLFlBQVU7QUFDL0IsUUFBTSxRQUFRLEVBQUUsTUFBRixFQUFVLEtBQVYsRUFBZDtBQUNBLFFBQUksU0FBUyxHQUFiLEVBQWtCO0FBQ2hCLFFBQUUsTUFBRixFQUFVLFdBQVYsR0FBd0IsUUFBeEIsQ0FBaUMsc0JBQWpDO0FBQ0E7QUFDQSxVQUFJLGFBQUo7QUFDRCxLQUpELE1BSU87QUFDTCxRQUFFLE1BQUYsRUFBVSxXQUFWLEdBQXdCLFFBQXhCLENBQWlDLGVBQWpDO0FBQ0EsVUFBSSxVQUFKO0FBQ0Q7QUFDRixHQVZEOztBQVlBLE1BQUksT0FBTyxVQUFQLENBQWtCLG9CQUFsQixFQUF3QyxPQUE1QyxFQUFxRDtBQUNuRCxNQUFFLE1BQUYsRUFBVSxRQUFWLENBQW1CLGtCQUFuQjtBQUNFLFFBQUksYUFBSjtBQUNILEdBSEQsTUFHTztBQUNMLE1BQUUsTUFBRixFQUFVLFFBQVYsQ0FBbUIsV0FBbkI7QUFDQSxRQUFJLFVBQUo7QUFDRDtBQUNGLENBcEJEOztBQXNCQSxJQUFJLE1BQUosR0FBYSxZQUFNO0FBQ2pCLElBQUUsb0JBQUYsRUFBd0IsUUFBeEIsQ0FBaUMsMEJBQWpDO0FBQ0EsSUFBRSxjQUFGLEVBQWtCLFFBQWxCLENBQTJCLGFBQTNCO0FBQ0EsSUFBRSxJQUFGLEVBQVEsRUFBUixDQUFXLENBQVgsRUFBYyxRQUFkLENBQXVCLHdCQUF2Qjs7QUFFQSxJQUFFLG1CQUFGLEVBQXVCLEVBQXZCLENBQTBCLE9BQTFCLEVBQW1DLFlBQVc7QUFDNUMsUUFBTSxlQUFlLEVBQUUsSUFBRixFQUFRLEtBQVIsRUFBckI7QUFDQSxRQUFNLGlCQUFpQixFQUFFLElBQUYsRUFBUSxHQUFSLENBQVksWUFBWixDQUF2Qjs7QUFFQSxNQUFFLElBQUYsRUFBUSxXQUFSLENBQW9CLHdCQUFwQjs7QUFFQSxRQUFJLGlCQUFpQixDQUFyQixFQUF3QjtBQUNwQixRQUFFLGNBQUYsRUFBa0IsV0FBbEIsR0FBZ0MsUUFBaEMsQ0FBeUMsMERBQXpDO0FBQ0EsUUFBRSxJQUFGLEVBQVEsRUFBUixDQUFXLENBQVgsRUFBYyxRQUFkLENBQXVCLGFBQXZCO0FBQ0EsUUFBRSxJQUFGLEVBQVEsRUFBUixDQUFXLENBQVgsRUFBYyxRQUFkLENBQXVCLGFBQXZCO0FBQ0gsS0FKRCxNQUlPLElBQUksaUJBQWlCLENBQXJCLEVBQXdCO0FBQzNCLFFBQUUsY0FBRixFQUFrQixXQUFsQixHQUFnQyxRQUFoQyxDQUF5Qyw0REFBekM7QUFDQSxRQUFFLElBQUYsRUFBUSxFQUFSLENBQVcsQ0FBWCxFQUFjLFFBQWQsQ0FBdUIsWUFBdkI7QUFDQSxRQUFFLElBQUYsRUFBUSxFQUFSLENBQVcsQ0FBWCxFQUFjLFFBQWQsQ0FBdUIsYUFBdkI7QUFDSCxLQUpNLE1BSUEsSUFBSSxpQkFBaUIsQ0FBckIsRUFBd0I7QUFDM0IsUUFBRSxjQUFGLEVBQWtCLFdBQWxCLEdBQWdDLFFBQWhDLENBQXlDLDREQUF6QztBQUNBLFFBQUUsSUFBRixFQUFRLEVBQVIsQ0FBVyxDQUFYLEVBQWMsUUFBZCxDQUF1QixZQUF2QjtBQUNBLFFBQUUsSUFBRixFQUFRLEVBQVIsQ0FBVyxDQUFYLEVBQWMsUUFBZCxDQUF1QixZQUF2QjtBQUNIOztBQUVELE1BQUUsbUJBQUYsRUFBdUIsV0FBdkIsQ0FBbUMsMEJBQW5DO0FBQ0EsTUFBRSxNQUFGLEVBQVUsV0FBVixDQUFzQixhQUF0QjtBQUNBLE1BQUUsSUFBRixFQUFRLFFBQVIsQ0FBaUIsMEJBQWpCO0FBQ0EsTUFBRSxJQUFGLEVBQVEsUUFBUixHQUFtQixRQUFuQixDQUE0QixhQUE1QjtBQUNELEdBeEJEO0FBeUJELENBOUJEOztBQWdDQSxJQUFJLFVBQUosR0FBaUIsWUFBTTtBQUNyQixJQUFFLGNBQUYsRUFBa0IsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsWUFBWTtBQUN4QyxNQUFFLFNBQUYsRUFBYSxRQUFiLENBQXNCLFlBQXRCO0FBQ0EsTUFBRSxjQUFGLEVBQWtCLFVBQWxCLENBQTZCLFVBQTdCLEVBQXlDLFFBQXpDLENBQWtELFdBQWxEO0FBQ0EsTUFBRSxlQUFGLEVBQW1CLFVBQW5CLENBQThCLFVBQTlCLEVBQTBDLE9BQTFDLENBQWtELE9BQWxELEVBQTJELFFBQTNELENBQW9FLG9DQUFwRTtBQUNELEdBSkQ7O0FBTUEsSUFBRSxlQUFGLEVBQW1CLEVBQW5CLENBQXNCLE9BQXRCLEVBQStCLFlBQVk7QUFDekMsTUFBRSxVQUFGLEVBQWMsUUFBZCxDQUF1QixZQUF2QjtBQUNBLE1BQUUsZUFBRixFQUFtQixVQUFuQixDQUE4QixVQUE5QixFQUEwQyxPQUExQyxDQUFrRCxPQUFsRCxFQUEyRCxRQUEzRCxDQUFvRSxvQ0FBcEU7QUFDRCxHQUhEO0FBSUQsQ0FYRDs7QUFhQSxJQUFJLGFBQUosR0FBb0IsWUFBTTtBQUN4QixJQUFFLGNBQUYsRUFBa0IsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsWUFBWTtBQUN4QyxNQUFFLCtCQUFGLEVBQW1DLFFBQW5DLENBQTRDLFlBQTVDO0FBQ0EsTUFBRSxnQ0FBRixFQUFvQyxRQUFwQyxDQUE2Qyx3Q0FBN0M7QUFDQSxNQUFFLGVBQUYsRUFBbUIsT0FBbkIsQ0FBMkIsT0FBM0I7QUFDRCxHQUpEOztBQU1BLElBQUUsZUFBRixFQUFtQixFQUFuQixDQUFzQixPQUF0QixFQUErQixZQUFZO0FBQ3pDLE1BQUUsZ0NBQUYsRUFBb0MsUUFBcEMsQ0FBNkMsWUFBN0M7QUFDQSxNQUFFLGdDQUFGLEVBQW9DLFFBQXBDLENBQTZDLHdDQUE3QztBQUNBLE1BQUUsZUFBRixFQUFtQixVQUFuQixDQUE4QixVQUE5QixFQUEwQyxPQUExQyxDQUFrRCxPQUFsRDtBQUNELEdBSkQ7QUFLRCxDQVpEOztBQWNBLElBQUksTUFBSixHQUFhLFlBQU07QUFDakIsSUFBRSxNQUFGLEVBQVUsRUFBVixDQUFhLFFBQWIsRUFBdUIsVUFBUyxDQUFULEVBQVk7QUFDakMsTUFBRSxnQ0FBRixFQUFvQyxLQUFwQztBQUNBLE1BQUUsY0FBRjtBQUNBLE1BQUUsZUFBRixFQUFtQixHQUFuQixDQUF1QixnQkFBdkI7O0FBRUEsUUFBTSxPQUFPLEVBQUUsd0JBQUYsRUFBNEIsR0FBNUIsRUFBYjtBQUNBLFFBQU0sVUFBVSxFQUFFLDJCQUFGLEVBQStCLEdBQS9CLEVBQWhCOztBQUVBLFNBQUssSUFBSSxDQUFULElBQWMsZUFBZCxFQUErQjtBQUM3QixVQUFJLE1BQU0sSUFBVixFQUFnQjtBQUNkLGFBQUssSUFBSSxDQUFULElBQWMsZ0JBQWdCLElBQWhCLENBQWQsRUFBcUM7QUFDbkMsY0FBSSxNQUFNLE9BQVYsRUFBbUI7QUFDakIsZ0JBQU0sY0FBZSxnQkFBZ0IsSUFBaEIsRUFBc0IsT0FBdEIsQ0FBckI7QUFDQSxnQkFBTSxZQUFZLFlBQVksS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLEtBQWMsWUFBWSxNQUFyQyxDQUFaLENBQWxCO0FBQ0EsZ0JBQU0sUUFBUSxFQUFFLE9BQUYsRUFBVyxJQUFYLENBQWdCLEtBQWhCLEVBQXVCLFNBQXZCLENBQWQ7QUFDQSxjQUFFLGdDQUFGLEVBQW9DLE1BQXBDLENBQTJDLEtBQTNDO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7QUFDRixHQXBCRDtBQXFCRCxDQXRCRDs7QUF3QkEsSUFBSSxJQUFKLEdBQVcsWUFBVztBQUNwQixNQUFJLFVBQUo7QUFDQSxNQUFJLE1BQUo7QUFDQSxNQUFJLE1BQUo7QUFDRCxDQUpEOztBQU1BLEVBQUUsWUFBVztBQUNYLE1BQUksSUFBSjtBQUNELENBRkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBwb3NzaWJsZVJlc3VsdHMgPSB7fVxuXG5wb3NzaWJsZVJlc3VsdHMuYXJyZXN0ZWREZXZlbG9wbWVudCA9IHtcbiAgICB0b3VnaExvdmU6IFtcbiAgICAgICdhc3NldHMvYXJyZXN0ZWQvdG91Z2gwMS5naWYnLFxuICAgICAgJ2Fzc2V0cy9hcnJlc3RlZC90b3VnaDAyLmdpZicsXG4gICAgICAnYXNzZXRzL2FycmVzdGVkL3RvdWdoMDMuZ2lmJyxcbiAgICAgICdhc3NldHMvYXJyZXN0ZWQvdG91Z2gwNC5naWYnXG4gICAgXSxcblxuICAgIGluc3BpcmF0aW9uOiBbXG4gICAgICAnYXNzZXRzL2FycmVzdGVkL2luc3BvMDEuZ2lmJyxcbiAgICAgICdhc3NldHMvYXJyZXN0ZWQvaW5zcG8wMi5naWYnLFxuICAgICAgJ2Fzc2V0cy9hcnJlc3RlZC9pbnNwbzAzLmdpZidcbiAgICBdLFxuXG4gICAgc25hcms6IFtcbiAgICAgICdhc3NldHMvYXJyZXN0ZWQvc25hcmswMS5naWYnLFxuICAgICAgJ2Fzc2V0cy9hcnJlc3RlZC9zbmFyazAyLmdpZicsXG4gICAgICAnYXNzZXRzL2FycmVzdGVkL3NuYXJrMDMuZ2lmJyxcbiAgICAgICdhc3NldHMvYXJyZXN0ZWQvc25hcmswNC5naWYnXG4gICAgXSxcblxuICAgIGFkdmljZTogW1xuICAgICAgJ2Fzc2V0cy9hcnJlc3RlZC9hZHZpY2UwMS5naWYnLFxuICAgICAgJ2Fzc2V0cy9hcnJlc3RlZC9hZHZpY2UwMi5naWYnLFxuICAgICAgJ2Fzc2V0cy9hcnJlc3RlZC9hZHZpY2UwMy5naWYnLFxuICAgICAgJ2Fzc2V0cy9hcnJlc3RlZC9hZHZpY2UwNC5naWYnLFxuICAgICAgJ2Fzc2V0cy9hcnJlc3RlZC9hZHZpY2UwNS5naWYnXG4gICAgXSxcblxuICAgIGNhbnQ6IFtcbiAgICAgICdhc3NldHMvYXJyZXN0ZWQvY2FudDAxLmdpZicsXG4gICAgICAnYXNzZXRzL2FycmVzdGVkL2NhbnQwMi5naWYnLFxuICAgICAgJ2Fzc2V0cy9hcnJlc3RlZC9jYW50MDMuZ2lmJyxcbiAgICAgICdhc3NldHMvYXJyZXN0ZWQvY2FudDA0LmdpZicsXG4gICAgICAnYXNzZXRzL2FycmVzdGVkL2NhbnQwNS5naWYnXG4gICAgXSxcblxuICAgIHlheTogW1xuICAgICAgJ2Fzc2V0cy9hcnJlc3RlZC95YXkwMS5naWYnLFxuICAgICAgJ2Fzc2V0cy9hcnJlc3RlZC95YXkwMi5naWYnXG4gICAgXVxufSxcblxucG9zc2libGVSZXN1bHRzLmJyb29rbHluTmluZU5pbmUgPSB7XG4gICAgdG91Z2hMb3ZlOiBbXG4gICAgICAnYXNzZXRzL2Jyb29rbHluL3RvdWdoMDEuZ2lmJyxcbiAgICAgICdhc3NldHMvYnJvb2tseW4vdG91Z2gwMi5naWYnLFxuICAgICAgJ2Fzc2V0cy9icm9va2x5bi90b3VnaDAzLmdpZicsXG4gICAgICAnYXNzZXRzL2Jyb29rbHluL3RvdWdoMDQuZ2lmJyxcbiAgICAgICdhc3NldHMvYnJvb2tseW4vdG91Z2gwNS5naWYnXG4gICAgXSxcbiAgICBpbnNwaXJhdGlvbjogW1xuICAgICAgJ2Fzc2V0cy9icm9va2x5bi9pbnNwbzAxLmdpZicsXG4gICAgICAnYXNzZXRzL2Jyb29rbHluL2luc3BvMDIuZ2lmJyxcbiAgICAgICdhc3NldHMvYnJvb2tseW4vaW5zcG8wMy5naWYnLFxuICAgICAgJ2Fzc2V0cy9icm9va2x5bi9pbnNwbzA0LmdpZidcbiAgICBdLFxuICAgIHNuYXJrOiBbXG4gICAgICAnYXNzZXRzL2Jyb29rbHluL3NuYXJrMDEuZ2lmJyxcbiAgICAgICdhc3NldHMvYnJvb2tseW4vc25hcmswMi5naWYnLFxuICAgICAgJ2Fzc2V0cy9icm9va2x5bi9zbmFyazAzLmdpZicsXG4gICAgICAnYXNzZXRzL2Jyb29rbHluL3NuYXJrMDQuZ2lmJ1xuICAgIF0sXG4gICAgYWR2aWNlOiBbXG4gICAgICAnYXNzZXRzL2Jyb29rbHluL2FkdmljZTAxLmdpZicsXG4gICAgICAnYXNzZXRzL2Jyb29rbHluL2FkdmljZTAyLmdpZicsXG4gICAgICAnYXNzZXRzL2Jyb29rbHluL2FkdmljZTAzLmdpZicsXG4gICAgICAnYXNzZXRzL2Jyb29rbHluL2FkdmljZTA0LmdpZicsXG4gICAgICAnYXNzZXRzL2Jyb29rbHluL2FkdmljZTA1LmdpZidcbiAgICBdLFxuICAgIGNhbnQ6IFtcbiAgICAgICdhc3NldHMvYnJvb2tseW4vY2FudDAxLmdpZicsXG4gICAgICAnYXNzZXRzL2Jyb29rbHluL2NhbnQwMi5naWYnLFxuICAgICAgJ2Fzc2V0cy9icm9va2x5bi9jYW50MDMuZ2lmJyxcbiAgICAgICdhc3NldHMvYnJvb2tseW4vY2FudDA0LmdpZidcbiAgICBdLFxuICAgIHlheTogW1xuICAgICAgJ2Fzc2V0cy9icm9va2x5bi95YXkwMS5naWYnLFxuICAgICAgJ2Fzc2V0cy9icm9va2x5bi95YXkwMi5naWYnXG4gICAgXVxufSxcblxucG9zc2libGVSZXN1bHRzLmNvbW11bml0eSA9IHtcbiAgdG91Z2hMb3ZlOiBbXG4gICAgJ2Fzc2V0cy9jb21tdW5pdHkvdG91Z2gwMS5naWYnLFxuICAgICdhc3NldHMvY29tbXVuaXR5L3RvdWdoMDIuZ2lmJyxcbiAgICAnYXNzZXRzL2NvbW11bml0eS90b3VnaDAzLmdpZicsXG4gICAgJ2Fzc2V0cy9jb21tdW5pdHkvdG91Z2gwNC5naWYnLFxuICAgICdhc3NldHMvY29tbXVuaXR5L3RvdWdoMDUuZ2lmJ1xuICBdLFxuXG4gIGluc3BpcmF0aW9uOiBbXG4gICAgJ2Fzc2V0cy9jb21tdW5pdHkvaW5zcG8wMS5naWYnLFxuICAgICdhc3NldHMvY29tbXVuaXR5L2luc3BvMDIuZ2lmJyxcbiAgICAnYXNzZXRzL2NvbW11bml0eS9pbnNwbzAzLmdpZicsXG4gICAgJ2Fzc2V0cy9jb21tdW5pdHkvaW5zcG8wNC5naWYnLFxuICAgICdhc3NldHMvY29tbXVuaXR5L2luc3BvMDUuZ2lmJyxcbiAgICAnYXNzZXRzL2NvbW11bml0eS9pbnNwbzA2LmdpZidcbiAgXSxcblxuICBzbmFyazogW1xuICAgICdhc3NldHMvY29tbXVuaXR5L3NuYXJrMDEuZ2lmJyxcbiAgICAnYXNzZXRzL2NvbW11bml0eS9zbmFyazAyLmdpZicsXG4gICAgJ2Fzc2V0cy9jb21tdW5pdHkvc25hcmswMy5naWYnLFxuICAgICdhc3NldHMvY29tbXVuaXR5L3NuYXJrMDQuZ2lmJyxcbiAgICAnYXNzZXRzL2NvbW11bml0eS9zbmFyazA1LmdpZicsXG4gICAgJ2Fzc2V0cy9jb21tdW5pdHkvc25hcmswNi5naWYnXG4gIF0sXG4gIGFkdmljZTogW1xuICAgICdhc3NldHMvY29tbXVuaXR5L2FkdmljZTAxLmdpZicsXG4gICAgJ2Fzc2V0cy9jb21tdW5pdHkvYWR2aWNlMDIuZ2lmJyxcbiAgICAnYXNzZXRzL2NvbW11bml0eS9hZHZpY2UwMy5naWYnLFxuICAgICdhc3NldHMvY29tbXVuaXR5L2FkdmljZTA0LmdpZidcbiAgXSxcbiAgY2FudDogW1xuICAgICdhc3NldHMvY29tbXVuaXR5L2NhbnQwMS5naWYnLFxuICAgICdhc3NldHMvY29tbXVuaXR5L2NhbnQwMi5naWYnLFxuICAgICdhc3NldHMvY29tbXVuaXR5L2NhbnQwMy5naWYnLFxuICAgICdhc3NldHMvY29tbXVuaXR5L2NhbnQwNC5naWYnLFxuICAgICdhc3NldHMvY29tbXVuaXR5L2NhbnQwNS5naWYnXG4gIF0sXG4gIHlheTogW1xuICAgICdhc3NldHMvY29tbXVuaXR5L3lheTAxLmdpZicsXG4gICAgJ2Fzc2V0cy9jb21tdW5pdHkveWF5MDIuZ2lmJyxcbiAgICAnYXNzZXRzL2NvbW11bml0eS95YXkwMy5naWYnLFxuICAgICdhc3NldHMvY29tbXVuaXR5L3lheTA0LmdpZicsXG4gICAgJ2Fzc2V0cy9jb21tdW5pdHkveWF5MDUuZ2lmJ1xuICBdXG59LFxuXG5wb3NzaWJsZVJlc3VsdHMudGhlT2ZmaWNlID0ge1xuICAgIHRvdWdoTG92ZTogW1xuICAgICAgJ2Fzc2V0cy9vZmZpY2UvdG91Z2gwMS5naWYnLFxuICAgICAgJ2Fzc2V0cy9vZmZpY2UvdG91Z2gwMi5naWYnLFxuICAgICAgJ2Fzc2V0cy9vZmZpY2UvdG91Z2gwMy5naWYnLFxuICAgICAgJ2Fzc2V0cy9vZmZpY2UvdG91Z2gwNC5naWYnLFxuICAgICAgJ2Fzc2V0cy9vZmZpY2UvdG91Z2gwNS5naWYnXG4gICAgXSxcblxuICAgIGluc3BpcmF0aW9uOiBbXG4gICAgICAnYXNzZXRzL29mZmljZS9pbnNwbzAxLmdpZicsXG4gICAgICAnYXNzZXRzL29mZmljZS9pbnNwbzAyLmdpZidcbiAgICBdLFxuXG4gICAgc25hcms6IFtcbiAgICAgICdhc3NldHMvb2ZmaWNlL3NuYXJrMDEuZ2lmJyxcbiAgICAgICdhc3NldHMvb2ZmaWNlL3NuYXJrMDIuZ2lmJyxcbiAgICAgICdhc3NldHMvb2ZmaWNlL3NuYXJrMDMuZ2lmJyxcbiAgICAgICdhc3NldHMvb2ZmaWNlL3NuYXJrMDQuZ2lmJyxcbiAgICAgICdhc3NldHMvb2ZmaWNlL3NuYXJrMDUuZ2lmJ1xuICAgIF0sXG5cbiAgICBhZHZpY2U6IFtcbiAgICAgICdhc3NldHMvb2ZmaWNlL2FkdmljZTAxLmdpZicsXG4gICAgICAnYXNzZXRzL29mZmljZS9hZHZpY2UwMi5naWYnLFxuICAgICAgJ2Fzc2V0cy9vZmZpY2UvYWR2aWNlMDMuZ2lmJ1xuICAgIF0sXG5cbiAgICBjYW50OiBbXG4gICAgICAnYXNzZXRzL29mZmljZS9jYW50MDEuZ2lmJyxcbiAgICAgICdhc3NldHMvb2ZmaWNlL2NhbnQwMi5naWYnLFxuICAgICAgJ2Fzc2V0cy9vZmZpY2UvY2FudDAzLmdpZidcbiAgICBdLFxuXG4gICAgeWF5OiBbXG4gICAgICAnYXNzZXRzL29mZmljZS95YXkwMS5naWYnLFxuICAgICAgJ2Fzc2V0cy9vZmZpY2UveWF5MDIuZ2lmJyxcbiAgICAgICdhc3NldHMvb2ZmaWNlL3lheTAzLmdpZicsXG4gICAgICAnYXNzZXRzL29mZmljZS95YXkwNC5naWYnXG4gICAgXVxufSxcblxucG9zc2libGVSZXN1bHRzLnRoaXJ0eVJvY2sgPSB7XG4gIHRvdWdoTG92ZTogW1xuICAgICdhc3NldHMvdGhpcnR5L3RvdWdoMDEuZ2lmJyxcbiAgICAnYXNzZXRzL3RoaXJ0eS90b3VnaDAyLmdpZicsXG4gICAgJ2Fzc2V0cy90aGlydHkvdG91Z2gwMy5naWYnLFxuICAgICdhc3NldHMvdGhpcnR5L3RvdWdoMDQuZ2lmJ1xuICBdLFxuXG4gIGluc3BpcmF0aW9uOiBbXG4gICAgJ2Fzc2V0cy90aGlydHkvaW5zcG8wMS5naWYnLFxuICAgICdhc3NldHMvdGhpcnR5L2luc3BvMDIuZ2lmJyxcbiAgICAnYXNzZXRzL3RoaXJ0eS9pbnNwbzAzLmdpZicsXG4gICAgJ2Fzc2V0cy90aGlydHkvaW5zcG8wNC5naWYnXG4gIF0sXG5cbiAgc25hcms6IFtcbiAgICAnYXNzZXRzL3RoaXJ0eS9zbmFyazAxLmdpZicsXG4gICAgJ2Fzc2V0cy90aGlydHkvc25hcmswMi5naWYnLFxuICAgICdhc3NldHMvdGhpcnR5L3NuYXJrMDMuZ2lmJ1xuICBdLFxuICBhZHZpY2U6IFtcbiAgICAnYXNzZXRzL3RoaXJ0eS9hZHZpY2UwMS5naWYnLFxuICAgICdhc3NldHMvdGhpcnR5L2FkdmljZTAyLmdpZicsXG4gICAgJ2Fzc2V0cy90aGlydHkvYWR2aWNlMDMuZ2lmJyxcbiAgICAnYXNzZXRzL3RoaXJ0eS9hZHZpY2UwNC5naWYnXG4gIF0sXG4gIGNhbnQ6IFtcbiAgICAnYXNzZXRzL3RoaXJ0eS9jYW50MDEuZ2lmJyxcbiAgICAnYXNzZXRzL3RoaXJ0eS9jYW50MDIuZ2lmJyxcbiAgICAnYXNzZXRzL3RoaXJ0eS9jYW50MDMuZ2lmJyxcbiAgICAnYXNzZXRzL3RoaXJ0eS9jYW50MDQuZ2lmJyxcbiAgICAnYXNzZXRzL3RoaXJ0eS9jYW50MDUuZ2lmJ1xuICBdLFxuICB5YXk6IFtcbiAgICAnYXNzZXRzL3RoaXJ0eS95YXkwMS5naWYnLFxuICAgICdhc3NldHMvdGhpcnR5L3lheTAyLmdpZicsXG4gICAgJ2Fzc2V0cy90aGlydHkveWF5MDMuZ2lmJyxcbiAgICAnYXNzZXRzL3RoaXJ0eS95YXkwNC5naWYnLFxuICAgICdhc3NldHMvdGhpcnR5L3lheTA1LmdpZidcbiAgXVxufSxcblxucG9zc2libGVSZXN1bHRzLnBhcmtzQW5kUmVjID0ge1xuICAgIHRvdWdoTG92ZTogW1xuICAgICAgJ2Fzc2V0cy9wYXJrcy90b3VnaDAxLmdpZicsXG4gICAgICAnYXNzZXRzL3BhcmtzL3RvdWdoMDIuZ2lmJyxcbiAgICAgICdhc3NldHMvcGFya3MvdG91Z2gwMy5naWYnLFxuICAgICAgJ2Fzc2V0cy9wYXJrcy90b3VnaDA0LmdpZicsXG4gICAgICAnYXNzZXRzL3BhcmtzL3RvdWdoMDUuZ2lmJ1xuICAgIF0sXG5cbiAgICBpbnNwaXJhdGlvbjogW1xuICAgICAgJ2Fzc2V0cy9wYXJrcy9pbnNwbzAxLmdpZicsXG4gICAgICAnYXNzZXRzL3BhcmtzL2luc3BvMDIuZ2lmJyxcbiAgICAgICdhc3NldHMvcGFya3MvaW5zcG8wMy5naWYnLFxuICAgICAgJ2Fzc2V0cy9wYXJrcy9pbnNwbzA0LmdpZidcbiAgICBdLFxuXG4gICAgc25hcms6IFtcbiAgICAgICdhc3NldHMvcGFya3Mvc25hcmswMS5naWYnLFxuICAgICAgJ2Fzc2V0cy9wYXJrcy9zbmFyazAyLmdpZicsXG4gICAgICAnYXNzZXRzL3BhcmtzL3NuYXJrMDMuZ2lmJyxcbiAgICAgICdhc3NldHMvcGFya3Mvc25hcmswNC5naWYnLFxuICAgICAgJ2Fzc2V0cy9wYXJrcy9zbmFyazA1LmdpZidcbiAgICBdLFxuXG4gICAgYWR2aWNlOiBbXG4gICAgICAnYXNzZXRzL3BhcmtzL2FkdmljZTAxLmdpZicsXG4gICAgICAnYXNzZXRzL3BhcmtzL2FkdmljZTAyLmdpZicsXG4gICAgICAnYXNzZXRzL3BhcmtzL2FkdmljZTAzLmdpZicsXG4gICAgICAnYXNzZXRzL3BhcmtzL2FkdmljZTA0LmdpZidcbiAgICBdLFxuXG4gICAgY2FudDogW1xuICAgICAgJ2Fzc2V0cy9wYXJrcy9jYW50MDEuZ2lmJyxcbiAgICAgICdhc3NldHMvcGFya3MvY2FudDAyLmdpZicsXG4gICAgICAnYXNzZXRzL3BhcmtzL2NhbnQwMy5naWYnLFxuICAgICAgJ2Fzc2V0cy9wYXJrcy9jYW50MDQuZ2lmJ1xuICAgIF0sXG5cbiAgICB5YXk6IFtcbiAgICAgICdhc3NldHMvcGFya3MveWF5MDEuZ2lmJyxcbiAgICAgICdhc3NldHMvcGFya3MveWF5MDIuZ2lmJyxcbiAgICAgICdhc3NldHMvcGFya3MveWF5MDMuZ2lmJyxcbiAgICAgICdhc3NldHMvcGFya3MveWF5MDQuZ2lmJ1xuICAgIF1cbn07XG5cbmNvbnN0IGFwcCA9IHt9O1xuXG5hcHAuZGV0ZWN0U2l6ZSA9ICgpID0+IHtcbiAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbigpe1xuICAgIGNvbnN0IHdpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgaWYgKHdpZHRoIDw9IDc1MCkge1xuICAgICAgJCgnLm5hdicpLnJlbW92ZUNsYXNzKCkuYWRkQ2xhc3MoJ25hdiBzbGlkZXJOYXYtLXNtYWxsJyk7XG4gICAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIGFwcC5zbWFsbGVyU2NyZWVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5uYXYnKS5yZW1vdmVDbGFzcygpLmFkZENsYXNzKCduYXYgc2xpZGVyTmF2Jyk7XG4gICAgICBhcHAuZnVsbFNjcmVlbigpO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NTBweCknKS5tYXRjaGVzKSB7XG4gICAgJCgnLm5hdicpLmFkZENsYXNzKCdzbGlkZXJOYXYtLXNtYWxsJyk7XG4gICAgICBhcHAuc21hbGxlclNjcmVlbigpO1xuICB9IGVsc2Uge1xuICAgICQoJy5uYXYnKS5hZGRDbGFzcygnc2xpZGVyTmF2Jyk7XG4gICAgYXBwLmZ1bGxTY3JlZW4oKTtcbiAgfVxufTtcblxuYXBwLnNsaWRlciA9ICgpID0+IHtcbiAgJCgnLnNsaWRlck5hdi0tdHZTaG93JykuYWRkQ2xhc3MoJ3NsaWRlck5hdl9fbGlua3MtLWFjdGl2ZScpO1xuICAkKCcuYnRuLS10dlNob3cnKS5hZGRDbGFzcygnYnRuLS1hY3RpdmUnKTtcbiAgJCgndWwnKS5lcSgwKS5hZGRDbGFzcygnc2xpZGVyQ29udGVudC0tY3VycmVudCcpO1xuXG4gICQoJy5zbGlkZXJOYXZfX2xpbmtzJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gJCh0aGlzKS5pbmRleCgpO1xuICAgIGNvbnN0IGN1cnJlbnRDb250ZW50ID0gJCgndWwnKS5nZXQoY3VycmVudEluZGV4KTtcbiAgIFxuICAgICQoJ3VsJykucmVtb3ZlQ2xhc3MoJ3NsaWRlckNvbnRlbnQtLWN1cnJlbnQnKTtcblxuICAgIGlmIChjdXJyZW50SW5kZXggPT09IDApIHtcbiAgICAgICAgJChjdXJyZW50Q29udGVudCkucmVtb3ZlQ2xhc3MoKS5hZGRDbGFzcygnc2xpZGVyQ29udGVudCBzbGlkZXJDb250ZW50LS1jdXJyZW50IHR2U2hvdyBtb3ZlRnJvbUxlZnQnKTtcbiAgICAgICAgJCgndWwnKS5lcSgxKS5hZGRDbGFzcygnbW92ZVRvUmlnaHQnKTtcbiAgICAgICAgJCgndWwnKS5lcSgyKS5hZGRDbGFzcygnbW92ZVRvUmlnaHQnKTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRJbmRleCA9PT0gMSkge1xuICAgICAgICAkKGN1cnJlbnRDb250ZW50KS5yZW1vdmVDbGFzcygpLmFkZENsYXNzKCdzbGlkZXJDb250ZW50IHNsaWRlckNvbnRlbnQtLWN1cnJlbnQgZmVlbGluZyBtb3ZlRnJvbVJpZ2h0JylcbiAgICAgICAgJCgndWwnKS5lcSgwKS5hZGRDbGFzcygnbW92ZVRvTGVmdCcpO1xuICAgICAgICAkKCd1bCcpLmVxKDIpLmFkZENsYXNzKCdtb3ZlVG9SaWdodCcpO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudEluZGV4ID09PSAyKSB7XG4gICAgICAgICQoY3VycmVudENvbnRlbnQpLnJlbW92ZUNsYXNzKCkuYWRkQ2xhc3MoJ3NsaWRlckNvbnRlbnQgc2xpZGVyQ29udGVudC0tY3VycmVudCByZXN1bHRzIG1vdmVGcm9tUmlnaHQnKVxuICAgICAgICAkKCd1bCcpLmVxKDApLmFkZENsYXNzKCdtb3ZlVG9MZWZ0Jyk7XG4gICAgICAgICQoJ3VsJykuZXEoMSkuYWRkQ2xhc3MoJ21vdmVUb0xlZnQnKTtcbiAgICB9XG5cbiAgICAkKCcuc2xpZGVyTmF2X19saW5rcycpLnJlbW92ZUNsYXNzKCdzbGlkZXJOYXZfX2xpbmtzLS1hY3RpdmUnKTtcbiAgICAkKCcuYnRuJykucmVtb3ZlQ2xhc3MoJ2J0bi0tYWN0aXZlJyk7XG4gICAgJCh0aGlzKS5hZGRDbGFzcygnc2xpZGVyTmF2X19saW5rcy0tYWN0aXZlJyk7XG4gICAgJCh0aGlzKS5jaGlsZHJlbigpLmFkZENsYXNzKCdidG4tLWFjdGl2ZScpO1xuICB9KTtcbn07XG5cbmFwcC5mdWxsU2NyZWVuID0gKCkgPT4ge1xuICAkKCcudHZTaG93ID4gbGknKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnLnR2U2hvdycpLmFkZENsYXNzKCdtb3ZlVG9MZWZ0Jyk7XG4gICAgJCgnLmJ0bi0tdHZTaG93JykucmVtb3ZlQXR0cignZGlzYWJsZWQnKS5hZGRDbGFzcygnYWN0aXZhdGVkJyk7XG4gICAgJCgnLmJ0bi0tZmVlbGluZycpLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJykudHJpZ2dlcignY2xpY2snKS5hZGRDbGFzcygnc2xpZGVyTmF2X19saW5rcy0tYWN0aXZlIGFjdGl2YXRlZCcpO1xuICB9KTtcblxuICAkKCcuZmVlbGluZyA+IGxpJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICQoJy5mZWVsaW5nJykuYWRkQ2xhc3MoJ21vdmVUb0xlZnQnKTtcbiAgICAkKCcuYnRuLS1yZXN1bHRzJykucmVtb3ZlQXR0cignZGlzYWJsZWQnKS50cmlnZ2VyKCdjbGljaycpLmFkZENsYXNzKCdzbGlkZXJOYXZfX2xpbmtzLS1hY3RpdmUgYWN0aXZhdGVkJyk7XG4gIH0pO1xufTtcblxuYXBwLnNtYWxsZXJTY3JlZW4gPSAoKSA9PiB7XG4gICQoJy50dlNob3cgPiBsaScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuc2xpZGVyTmF2X19saW5rczpmaXJzdC1jaGlsZCcpLmFkZENsYXNzKCdtb3ZlVG9MZWZ0Jyk7XG4gICAgJCgnLnNsaWRlck5hdl9fbGlua3M6bnRoLWNoaWxkKDIpJykuYWRkQ2xhc3MoJ21vdmVGcm9tUmlnaHQgc2xpZGVyTmF2X19saW5rcy0tYWN0aXZlJyk7XG4gICAgJCgnLmJ0bi0tZmVlbGluZycpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gIH0pO1xuXG4gICQoJy5mZWVsaW5nID4gbGknKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnLnNsaWRlck5hdl9fbGlua3M6bnRoLWNoaWxkKDIpJykuYWRkQ2xhc3MoJ21vdmVUb0xlZnQnKTtcbiAgICAkKCcuc2xpZGVyTmF2X19saW5rczpudGgtY2hpbGQoMyknKS5hZGRDbGFzcygnbW92ZUZyb21SaWdodCBzbGlkZXJOYXZfX2xpbmtzLS1hY3RpdmUnKTtcbiAgICAkKCcuYnRuLS1yZXN1bHRzJykucmVtb3ZlQXR0cignZGlzYWJsZWQnKS50cmlnZ2VyKCdjbGljaycpO1xuICB9KTtcbn1cblxuYXBwLmV2ZW50cyA9ICgpID0+IHtcbiAgJCgnZm9ybScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XG4gICAgJCgnLnJlc3VsdHMgLnNsaWRlckNvbnRlbnRfX2l0ZW1zJykuZW1wdHkoKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCgnLmJ0bi0tcmVzdWx0cycpLnZhbCgnR2lmIG1lIGFub3RoZXInKTtcblxuICAgIGNvbnN0IHNob3cgPSAkKCdpbnB1dFtuYW1lPXR2XTpjaGVja2VkJykudmFsKCk7XG4gICAgY29uc3QgZmVlbGluZyA9ICQoJ2lucHV0W25hbWU9ZmVlbHNdOmNoZWNrZWQnKS52YWwoKTtcblxuICAgIGZvciAobGV0IHggaW4gcG9zc2libGVSZXN1bHRzKSB7XG4gICAgICBpZiAoeCA9PT0gc2hvdykge1xuICAgICAgICBmb3IgKGxldCB5IGluIHBvc3NpYmxlUmVzdWx0c1tzaG93XSkge1xuICAgICAgICAgIGlmICh5ID09PSBmZWVsaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBmaW5hbENob2ljZSA9IChwb3NzaWJsZVJlc3VsdHNbc2hvd11bZmVlbGluZ10pO1xuICAgICAgICAgICAgY29uc3QgcmFuZG9tR2lmID0gZmluYWxDaG9pY2VbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmZpbmFsQ2hvaWNlLmxlbmd0aCldO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSAkKCc8aW1nPicpLmF0dHIoJ3NyYycsIHJhbmRvbUdpZik7XG4gICAgICAgICAgICAkKCcucmVzdWx0cyAuc2xpZGVyQ29udGVudF9faXRlbXMnKS5hcHBlbmQoaW1hZ2UpO1xuICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH07XG4gIH0pO1xufTtcblxuYXBwLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgYXBwLmRldGVjdFNpemUoKTtcbiAgYXBwLnNsaWRlcigpO1xuICBhcHAuZXZlbnRzKCk7XG59O1xuXG4kKGZ1bmN0aW9uKCkge1xuICBhcHAuaW5pdCgpO1xufSk7Il19