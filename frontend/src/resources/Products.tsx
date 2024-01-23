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
const ProductsTitle = () => {
  const record = useRecordContext();
  return <span>Products {record ? `"${ record.Title }"` : ""}</span>;
};

export const ProductsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="Title" />
<TextField source="Description" />
<TextField source="Price" />
<TextField source="Category" />
<NumberField source="Id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const ProductsEdit = () => (
                    <Edit title={<ProductsTitle />}>
                      <SimpleForm>
                          <TextInput source="Title"   />
<TextInput source="Description"   />
<TextInput source="Price"   />
<TextInput source="Category"   />
<NumberInput source="Id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const ProductsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="Title"   />
<TextInput source="Description"   />
<TextInput source="Price"   />
<TextInput source="Category"   />
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


