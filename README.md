# angular-phrase

[![Build Status](https://travis-ci.org/phrase/angular-phrase.png)](https://travis-ci.org/phrase/angular-phrase)

angular-phrase is an addon for [angular-translate](https://github.com/angular-translate/angular-translate) that lets you connect localized AngularJS applications to the PhraseApp In-Context editor.

## Prerequisites

To use angular-phrase with your application you have to:

* Sign up for a PhraseApp account: [https://phraseapp.com/en/signup](https://phraseapp.com/en/signup)
* Use the excellent [angular-translate](https://github.com/angular-translate/angular-translate) module by Pascal Precht for localization in your AngularJS app
* Have jQuery included

## Demo

See the In-Context-Editor in a demo application: [http://angular-phrase-demo.herokuapp.com/](http://angular-phrase-demo.herokuapp.com/)

(Find the source code for the demo on GitHub: [angular-phrase-demo](https://github.com/phrase/angular-phrase-demo)


## Install

### Install angular-phrase via Bower:

    bower install angular-phrase

(or download it manually from the `dist` folder)


### Build form source

You can also build it directly from source to get the latest and greatest:

    grunt build


### Add the module

Add angular-phrase module to your existing AngularJS application _after_ loading the `angular-translate` module:

	var myApp = angular.module("myApp", ['pascalprecht.translate', 'phrase'])

### Configure

Configure the module:

	myApp.value("phraseAuthToken", "MY-AUTH-TOKEN");
	myApp.value("phraseEnabled", true);
	myApp.value("phraseDecoratorPrefix", "{{__");
	myApp.value("phraseDecoratorSuffix", "__}}");

### Javascript snippet

Add the `phrase-javascript` directive within your application, usually best within the `<head>`:

    <phrase-javascript></phrase-javascript>

If this does not work for you, you can also integrate the [Javscript snippet manually](https://phraseapp.com/docs/installation/phrase-javascript).


## How does it work?

Once the module is enabled it will:

* override the $translate service and provide placeholders that can be picked up by the PhraseApp [In-Context-Editor](https://phraseapp.com/en/features/in-context-editor)

* fetch the Javascript application used to render the In-Context editor on top of your application


## Using AngularJS with phrase gem or any other server side technology

If you use the angular-phrase plugin in combination with the phrase gem or another server side mechanism that enables the In-Context-Editor, AngularJS might have problems if you use curly braces as PhraseApp decorator suffix/prefix since AngularJS thinks that you're rendered decoratated keys are AngularJS directives (which is not the case).

You can easily solve this issue by using a different decorator syntax for your setup:

#### angular-phrase configuration

    app.value("phraseDecoratorPrefix", "[[__");
    app.value("phraseDecoratorSuffix", "__]]");

#### phrase gem

    Phrase.prefix = "[[__"
    Phrase.suffix = "__]]"

#### JavaScript configuration

    window.PHRASE_CONFIG = {
      prefix: '[[__',
      suffix: "__]]"
    }


## TODO

* ~~Add support for `translate` filter~~
* Add support for `translate` directive
* Add support for interpolation values


## Support

**Question?** File a support ticket at: [support.phraseapp.com](http://support.phraseapp.com)

**Issue?** use GitHub issues and share the problem


## Test

Run unit tests using grunt/Karma:

    grunt karma:unit
