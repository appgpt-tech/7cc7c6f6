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
const PlayersTitle = () => {
  const record = useRecordContext();
  return <span>Players {record ? `"${ record.Name }"` : ""}</span>;
};

export const PlayersList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="Name" />
<TextField source="Position" />
<TextField source="Nationality" />
<TextField source="Stats" />
<NumberField source="Id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const PlayersEdit = () => (
                    <Edit title={<PlayersTitle />}>
                      <SimpleForm>
                          <TextInput source="Name"   />
<TextInput source="Position"   />
<TextInput source="Nationality"   />
<TextInput source="Stats"   />
<NumberInput source="Id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const PlayersCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="Name"   />
<TextInput source="Position"   />
<TextInput source="Nationality"   />
<TextInput source="Stats"   />
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


