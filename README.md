# redux-thunk-handle-rejection

Improved redux-thunk.

You can handle the result of thunk.

## Usecase Example

In case you might want to catch unhandled Promise rejection.

```typescript
const thunk = createThunk<RootState, undefined>({
  actionResultHandler(actionResult: any) {
    // TODO: technically this may not be accurate if BlueBird instance is containerd
    if (actionResult instanceof Promise) {
      return actionResult.catch(err => {
        if (err.status === 401) {
          console.log('need authorization');
        }
        elseif (err.status === 500) {
          console.log('unexpected error occurred');
        }
      });
    }
    return actionResult;
  }
});
```
