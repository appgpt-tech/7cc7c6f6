import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  //EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  //UrlInput,
} from "react-admin";
import { useRecordContext } from "react-admin";
const ListActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton />
        <ExportButton />
        <SelectColumnsButton />
    </TopToolbar>
);
const OrdersTitle = () => {
  const record = useRecordContext();
  return <span>Orders {record ? `"${ record.Id }"` : ""}</span>;
};

export const OrdersList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="Userid" />
<TextField source="Productid" />
<TextField source="Quantity" />
<TextField source="Totalprice" />
<NumberField source="Id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const OrdersEdit = () => (
                    <Edit title={<OrdersTitle />}>
                      <SimpleForm>
                          <TextInput source="Userid"   />
<TextInput source="Productid"   />
<TextInput source="Quantity"   />
<TextInput source="Totalprice"   />
<NumberInput source="Id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const OrdersCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="Userid"   />
<TextInput source="Productid"   />
<TextInput source="Quantity"   />
<TextInput source="Totalprice"   />
<NumberInput source="Id"   disabled/>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,
,

    ];


