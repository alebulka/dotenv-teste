import 'package:flutter/material.dart';

void main() async{
    await DotEnv().load('.env');
    runApp(ModularApp(module:AppModule()))
}

class _HomePageState