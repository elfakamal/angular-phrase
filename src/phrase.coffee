phrase = angular.module "phrase", ['pascalprecht.translate', 'ng']

phrase.value "phraseAuthToken", ""
phrase.value "phraseEnabled", true
phrase.value "phraseDecoratorPrefix", "{{__"
phrase.value "phraseDecoratorSuffix", "__}}"

phrase.config ["$provide", ($provide) ->
  $provide.decorator "$translate", ["$delegate", "phraseEnabled", "phraseDecoratorPrefix", "phraseDecoratorSuffix", ($translate, phraseEnabled, phraseDecoratorPrefix, phraseDecoratorSuffix) ->
    if phraseEnabled
      originalTranslate = $translate
      $translate = (translationId, interpolateParams, interpolationId) ->
        originalTranslate("#{phraseDecoratorPrefix}phrase_#{translationId}#{phraseDecoratorSuffix}", interpolateParams, interpolationId)

      angular.extend($translate, originalTranslate)

    $translate
  ]
]
