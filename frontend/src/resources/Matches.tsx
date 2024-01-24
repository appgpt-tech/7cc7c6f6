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
const MatchesTitle = () => {
  const record = useRecordContext();
  return <span>Matches {record ? `"${ record.Date }"` : ""}</span>;
};

export const MatchesList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="Date" />
<TextField source="Opponent" />
<TextField source="Score" />
<TextField source="Location" />
<NumberField source="Id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const MatchesEdit = () => (
                    <Edit title={<MatchesTitle />}>
                      <SimpleForm>
                          <TextInput source="Date"   />
<TextInput source="Opponent"   />
<TextInput source="Score"   />
<TextInput source="Location"   />
<NumberInput source="Id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const MatchesCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="Date"   />
<TextInput source="Opponent"   />
<TextInput source="Score"   />
<TextInput source="Location"   />
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


