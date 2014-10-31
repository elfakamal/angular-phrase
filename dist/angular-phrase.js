(function() {
  var phrase;

  phrase = angular.module("phrase", ['pascalprecht.translate', 'ng']);

  phrase.value("phraseAuthToken", "");

  phrase.value("phraseEnabled", true);

  phrase.value("phraseDecoratorPrefix", "{{__");

  phrase.value("phraseDecoratorSuffix", "__}}");

  phrase.config([
    "$provide", function($provide) {
      return $provide.decorator("$translate", [
        "$delegate", "phraseEnabled", "phraseDecoratorPrefix", "phraseDecoratorSuffix", function($translate, phraseEnabled, phraseDecoratorPrefix, phraseDecoratorSuffix) {
          if (phraseEnabled) {
            var originalTranslate = $translate;
            $translate = function (translationId, interpolateParams, interpolationId) {
              return originalTranslate("" + phraseDecoratorPrefix + "phrase_" + translationId + phraseDecoratorSuffix, interpolateParams, interpolationId);
            }
            angular.extend($translate, originalTranslate);
          }
          return $translate;
        }
      ]);
    }
  ]);

}).call(this);

(function() {
  var phrase;

  phrase = angular.module("phrase");

  phrase.directive("phraseJavascript", [
    "phraseEnabled", "phraseAuthToken", "$window", function(phraseEnabled, phraseAuthToken, $window) {
      return {
        restrict: "EA",
        replace: true,
        link: function() {
          var url;
          if (phraseEnabled) {
            url = ['https://', 'phraseapp.com/assets/phrase/0.1/app.js?', new Date().getTime()].join('');
            $window.phrase_auth_token = phraseAuthToken;
            return $window.jQuery.getScript(url);
          }
        }
      };
    }
  ]);

}).call(this);
