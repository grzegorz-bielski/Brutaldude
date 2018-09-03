from Brutaldude.logger import logger
from random import choice
from characters.models import Character

available_cmd = ['ATTACK', 'DEFENSE']


# cmds = {
#     'ATTACK': attack
# }


def fight_service(character=None, commands=None):
    commands_length = len(commands)

    enemy = get_random_enemy()
    enemy_commands = [choice(available_cmd)
                      for n in range(commands_length)]

    logger.debug(character, enemy)

    run_game(character, enemy, enemy_commands, commands)

    logger.debug(character, enemy)

    character.save()
    enemy.save()

    return {character.name: len(commands)}


def get_random_enemy():
    pks = Character.objects.values_list('pk', flat=True).order_by('id')
    random_pk = choice(pks)
    return Character.objects.get(pk=random_pk)


def run_game(character, enemy, enemy_commands, commands):
    for i in range(len(commands)):
        enemy_cmd = enemy_commands[i]
        user_cmd = commands[i]

        if enemy_cmd == 'ATTACK' and user_cmd == 'ATTACK':
            attack(enemy, character)
            attack(character, enemy)

        if enemy_cmd == 'ATTACK' and user_cmd == 'DEFENSE':
            attack(character, enemy, True)

        if enemy_cmd == 'DEFENSE' and user_cmd == 'ATTACK':
            attack(enemy, character, True)


def attack(victim, aggressor, isDefending=False):
    if victim.defense > 0 and isDefending:
        defense = victim.defense - aggressor.power

        if defense < 0:
            victim.health -= defense
            victim.defense = 0
        else:
            victim.defense = defense
    else:
        victim.health -= aggressor.power
