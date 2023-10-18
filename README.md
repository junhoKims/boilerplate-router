# Vite 'React Router Dom' Boilerplate

- [x] typescript
- [x] eslint
- [x] prettier
- [x] emotion
- [x] react-router-dom

## React Router dom V6

v6에서 요구하는 D Routing Data APIs 사용 (createBrowserRouter).
loader나 error 등을 자체적으로 지원하는데, 이는 router 라이브러리에 의존하기보다는, Suspense + 다른 방법 등을 조합해서
 시도해보고 판단해도 늦지 않을듯하다.

### Page Layout

`createBrowserRouter` 사용해 구현. `RouterProvider` 는 children을 받지 않으므로 기존과 다르게 Router안에 이를 책임질 일종의 layout 파일(App.tsx)을 만들어서 처리

### Nested Routing

`children` 사용해서 구현. 단순히 특정 페이지들에게만 먹여야하는 Wrapper가 필요하다면 이러한 방식으로 쉽게 구현이 가능

### dynamic Routing

`exact` 가 기본적으로 적용되고 props에서 제거, 그 외에는 기존방식과 동일

## ErrorBoundary

`createBrowserRouter` 에서 props로 제공하는 ErrorBoundary는 라이브러리 자체적으로 제공하는 기술. docs를 참고해보면 `useRouteError` 등을 사용해서 따로 만들어서 제공하고 있음.

## Next Todo

- [ ] page 단위 code splitting
- [ ] vite ssr
