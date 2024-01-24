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
const NewsTitle = () => {
  const record = useRecordContext();
  return <span>News {record ? `"${ record.Headline }"` : ""}</span>;
};

export const NewsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="Headline" />
<TextField source="Content" />
<TextField source="Author" />
<TextField source="Date" />
<NumberField source="Id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const NewsEdit = () => (
                    <Edit title={<NewsTitle />}>
                      <SimpleForm>
                          <TextInput source="Headline"   />
<TextInput source="Content"   />
<TextInput source="Author"   />
<TextInput source="Date"   />
<NumberInput source="Id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const NewsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="Headline"   />
<TextInput source="Content"   />
<TextInput source="Author"   />
<TextInput source="Date"   />
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


