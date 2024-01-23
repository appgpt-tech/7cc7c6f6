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
const PaymentsTitle = () => {
  const record = useRecordContext();
  return <span>Payments {record ? `"${ record.Orderid }"` : ""}</span>;
};

export const PaymentsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="Orderid" />
<TextField source="Transactionid" />
<TextField source="Status" />
<NumberField source="Id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const PaymentsEdit = () => (
                    <Edit title={<PaymentsTitle />}>
                      <SimpleForm>
                          <TextInput source="Orderid"   />
<TextInput source="Transactionid"   />
<TextInput source="Status"   />
<NumberInput source="Id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const PaymentsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="Orderid"   />
<TextInput source="Transactionid"   />
<TextInput source="Status"   />
<NumberInput source="Id"   disabled/>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,

    ];


