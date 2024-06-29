# Redux From First Principles

## Intent

This experiment explores the fundamentals of unidirectional state management.
It intends to reason through how and why a [Flux-like](https://facebookarchive.github.io/flux/)
architecture might be a good fit for global state management in a frontend web
app, using the bare-bones Redux API described [here](https://redux.js.org/tutorials/fundamentals/part-1-overview),
without the abstractions provided by [Redux Toolkit](https://redux-toolkit.js.org/).

> **Note:**
> Given the Redux docs refer to Redux Toolkit as the "official recommended
> approach" for building production-grade apps using Redux, this experiment is
> for educational purposes exclusively.

## Observations

- Setting up Redux without any abstractions results in a lot of verbose
  boilerplate code, which creates visual noise. At this early juncture, it's
  already obvious why the Redux team promotes Redux Toolkit to such an extent.
