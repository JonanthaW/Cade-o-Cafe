import os
import time
import speech_recognition as sr


class faces:
    def leticiaSearching():
        print("\033c")
        print("""
                      |.---------.|
                      ||         ||
                      ||   ◉_◉   ||
                      ||         ||
                      |'---------'|
                       `)__ ____('
                       [=== -- o ]--.
                     __'---------'__ \\
                    [::::::::::: :::] )
                     `'''''''''''''`""")

    def leticiaHappy():
        print("\033c")
        print("""
                      |.---------.|
                      ||         ||
                      ||  ｡◕‿◕｡  ||
                      ||         ||
                      |'---------'|
                       `)__ ____('
                       [=== -- o ]--.
                     __'---------'__ \\
                    [::::::::::: :::] )
                     `'''''''''''''`""")



def ouvir_microfone():

    microfone = sr.Recognizer()
    with sr.Microphone() as source:

        microfone.adjust_for_ambient_noise(source)

        faces.leticiaHappy()
        print("\t\tComo posso ajudar?")

        audio = microfone.listen(source)
        try:
          frase = microfone.recognize_google(audio,language='pt-BR')
          print("\t\t\n" + frase)
          time.sleep(5)
          
          faces.leticiaSearching()
          print("\t\tEntendido, só um minutinho...")
          os.system("python3 creatingData.py")
          
          time.sleep(10)
          
          faces.leticiaHappy()
          print("\t\t\tProntinho")
          os.system("firefox bin/index.html")

        except sr.UnkownValueError:
          print("Não entendi, pode repetir?")

ouvir_microfone()
