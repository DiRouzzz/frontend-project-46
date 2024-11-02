### Hexlet tests and linter status:
[![Maintainability](https://api.codeclimate.com/v1/badges/08e63f6c415bc86c1784/maintainability)](https://codeclimate.com/github/DiRouzzz/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/08e63f6c415bc86c1784/test_coverage)](https://codeclimate.com/github/DiRouzzz/frontend-project-46/test_coverage)
[![Actions Status](https://github.com/DiRouzzz/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/DiRouzzz/frontend-project-46/actions)

# Вычислитель отличий 

## Описание

*Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов, например http://www.jsondiff.com/. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменений в конфигурационных файлах.*

## Возможности утилиты:

- *Поддержка разных входных форматов: yaml, json.*
- *Генерация отчета в виде plain text, stylish и json.*


## Цель

*Вычислитель отличий – проект, который по-настоящему прокачивает даже опытных разработчиков. Здесь вам придется столкнуться с принятием сложных архитектурных решений, автоматизированным тестированием и непрерывной интеграцией, функциональным программированием, работе с древовидными структурами данных и рекурсивными алгоритмами.*

## Структуры данных и Алгоритмы

*Выбор правильных структур данных в коде – один из ключей к удачной архитектуре и простому коду. От этого зависит удобство анализа и обработки, количество и сложность условных конструкций.*

*Главный вопрос в проекте – как описать внутреннее представление различий между файлами так, чтобы оно было максимально удобно. И хотя для этого существует множество разных способов, лишь некоторые из них приводят к простому коду.*

*Работа с деревьями и древовидной рекурсией очень хорошо прокачивает алгоритмическое мышление. Это важно, так как реальная разработка сопряжена с постоянной обработкой данных, различными преобразованиями и выводом коллекций.*

## Архитектура

*В ходе разработки понадобится выполнять множество операций: чтение файлов, парсинг входящих данных, построение дерева различий, формирование необходимого вывода. Все это требует хорошей организации кода. Модульность и абстракции выходят в этом проекте на новый уровень.*

*Помимо внутренней архитектуры, в этом проекте появляется необходимость работать с параметрами командной строки. Происходит углубление понимания работы операционных систем в целом и командных интерпретаторов в частности. Для организации этой части кода используется популярная библиотека commander.js, архитектура которой позволяет легко строить консольные утилиты.*

## Тестирование и Отладка

*Автоматизированные тесты – неотъемлемая часть профессиональной разработки. Вычислитель отличий — идеальный проект для прокачки навыка тестирования. Он достаточно простой и удобный для написания тестов, и достаточно сложный для того, чтобы прочувствовать важность этих тестов во время рефакторинга и отладки. В отличие от практики Хекслета, здесь предстоит писать тесты самостоятельно. Причем это можно делать до кода, практикуя TDD.*

*Для написания тестов используется фреймворк [Jest](https://jestjs.io/ru/)*

## Установка:

```sh
$ make install
```

## Пример использования:

#### Сравнение плоских файлов (JSON):
[![asciicast](https://asciinema.org/a/gVevahWLlL0ioAzbDzvDgNLxx.svg)](https://asciinema.org/a/gVevahWLlL0ioAzbDzvDgNLxx)

#### Сравнение плоских файлов (yaml):
[![asciicast](https://asciinema.org/a/wn4BmLknt9tGrSyKDTIgfJyMO.svg)](https://asciinema.org/a/wn4BmLknt9tGrSyKDTIgfJyMO)

#### Рекурсивное сравнение:
[![asciicast](https://asciinema.org/a/xGabviPTi82fdEjt4lAc6Z7Ls.svg)](https://asciinema.org/a/xGabviPTi82fdEjt4lAc6Z7Ls)

#### Плоский формат:
[![asciicast](https://asciinema.org/a/SxshhrRBg53ZiuTVA7hERiW3d.svg)](https://asciinema.org/a/SxshhrRBg53ZiuTVA7hERiW3d)

#### Вывод в json:
[![asciicast](https://asciinema.org/a/oAASg0zaeh0ilkIgHoJJ5wTXX.svg)](https://asciinema.org/a/oAASg0zaeh0ilkIgHoJJ5wTXX)