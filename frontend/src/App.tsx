
// in src/App.tsx
import { Admin, Resource, CustomRoutes } from "react-admin";
import postgrestRestProvider from "@promitheus/ra-data-postgrest";
import fakeDataProvider from "ra-data-fakerest";
import { Dashboard } from "./dashboard";
import { authProvider, apInitialize } from "./authProvider";
import { i18nProvider } from "./i18nProvider";
import LoginPage, { Login } from "./Login";
import data from "./data";
import { ProductsList, ProductsCreate, ProductsEdit} from "./resources/Products";
import { CategoriesList, CategoriesCreate, CategoriesEdit} from "./resources/Categories";
import { UsersList, UsersCreate, UsersEdit} from "./resources/Users";
import { OrdersList, OrdersCreate, OrdersEdit} from "./resources/Orders";
import { PaymentsList, PaymentsCreate, PaymentsEdit} from "./resources/Payments";
import ProductsIcon from "@mui/icons-material/LocalMall";
import CategoriesIcon from "@mui/icons-material/Category";
import UsersIcon from "@mui/icons-material/People";
import OrdersIcon from "@mui/icons-material/Receipt";
import PaymentsIcon from "@mui/icons-material/Payment"; 
// SUPERTOKENS
import React from "react";
import SuperTokens, {
  SuperTokensWrapper,
  getSuperTokensRoutesForReactRouterDom,
} from "supertokens-auth-react";
import ThirdPartyPasswordless from "supertokens-auth-react/recipe/thirdpartypasswordless";
import Session from "supertokens-auth-react/recipe/session";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import * as reactRouterDom from "react-router-dom";
let sessionFn = Session.init();
SuperTokens.init({
  appInfo: {
    appName: import.meta.env.VITE_SUPERTOKENS_APPNAME,
    apiDomain: import.meta.env.VITE_BACKEND_DOMAIN,
    websiteDomain: import.meta.env.VITE_SUPERTOKENS_WEBSITEDOMAIN,
    apiBasePath: import.meta.env.VITE_BACKEND_APIPATH + "/auth",
    websiteBasePath: import.meta.env.VITE_SUPERTOKENS_WEBSITEBASEPATH,
  },
  recipeList: [
    ThirdPartyPasswordless.init({
      contactMethod: "EMAIL",
      signInUpFeature: {
        providers: [
          ThirdPartyPasswordless.Github.init(),
          //ThirdPartyPasswordless.Google.init(),
          //ThirdPartyPasswordless.Facebook.init(),
          //ThirdPartyPasswordless.Apple.init(),
        ],
      },
    }),
    sessionFn,
  ],
});
apInitialize(Session);
// END SUPERTOKENS
let dataProvider: any;
if (import.meta.env.VITE_USE_BACKEND_DATA === "true") {
  dataProvider = postgrestRestProvider(
    import.meta.env.VITE_BACKEND_DOMAIN +
      import.meta.env.VITE_BACKEND_APIPATH +
      "/proxy"
  );
} else {
  dataProvider = fakeDataProvider(data.defaultData);
}

const App = () => (
  <SuperTokensWrapper>
    <BrowserRouter basename="/7cc7c6f6">
      <Admin
        authProvider={
          import.meta.env.VITE_ENVIRONMENT != "DEV" ? authProvider : undefined
        }
        requireAuth
        loginPage={LoginPage}
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
        dashboard={Dashboard}
        
      >
    <Resource name="Products" options={{label:"products"}} 
list={ProductsList}
create={ProductsCreate}
edit={ProductsEdit}
recordRepresentation="title"
icon={ProductsIcon}/>
<Resource name="Categories" options={{label:"categories"}} 
list={CategoriesList}
create={CategoriesCreate}
edit={CategoriesEdit}
recordRepresentation="name"
icon={CategoriesIcon}/>
<Resource name="Users" options={{label:"users"}} 
list={UsersList}
create={UsersCreate}
edit={UsersEdit}
recordRepresentation="email"
icon={UsersIcon}/>
<Resource name="Orders" options={{label:"orders"}} 
list={OrdersList}
create={OrdersCreate}
edit={OrdersEdit}
recordRepresentation="userid"
icon={OrdersIcon}/>
<Resource name="Payments" options={{label:"payments"}} 
list={PaymentsList}
create={PaymentsCreate}
edit={PaymentsEdit}
recordRepresentation="orderid"
icon={PaymentsIcon}/>
    <CustomRoutes noLayout>
      {/*This renders the login UI on the /auth route*/}
      {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
      {/*Your app routes*/}
    </CustomRoutes>
  </Admin>
  </BrowserRouter>
  </SuperTokensWrapper>
);

export default App;
