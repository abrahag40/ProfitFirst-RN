import AccountList from '@/components/AccountList';
// import database from '@/db';
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';

export default function Accounts()  {

  const [name, setName] = useState('');
  const [cap, setCap] = useState('');
  const [tap, setTap] = useState('');

  const createAccount = () => {
    console.warn('Create account', name);
  }

  const onRead = async () => {
    // const accountsCollection = database.get('accounts')

    // const accounts = await accountsCollection.query().fetch();
    // console.log(accounts);
    
    
    // await database.write(async () => {
    //   accountsCollection.create(account => {
    //     account.name = 'Test';
    //     account.cap = 10.5;
    //     account.tap = 20.1;
    //   })
    // })

  }

  return (
    <View style={{ gap: 5, padding: 5 }}>
      <View style={styles.header}>
        <Text> Name </Text>
        <Text> CAP </Text>
        <Text> TAP </Text>
      </View>
      
      <AccountList />

      <View style={styles.inputRow}>
        <TextInput placeholder='Name' style={styles.input} />
        <TextInput placeholder='CAP %' style={styles.input} />
        <TextInput placeholder='TAP %' style={styles.input} />
        <Entypo name='check' size={20} color={'green'} />
      </View>

      <Button title='Add account' onPress={createAccount} />

      <Button title='Read' onPress={onRead} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white'
  },
  input: {
    flex: 1,
  }
})