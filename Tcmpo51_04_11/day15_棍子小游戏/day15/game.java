import entity.Person;

import java.util.Scanner;

public class MyGame {
    private static boolean isPlaying = true;
    private static int aa = 0;

    /**
     * �������˼�����Ϸ
     * 1:����  2:����
     * �������˶Դ�
     * Ѫ�� 100
     * �� A:ȭ  B:��  C:����
     * A:������ 60% -10 B:40% -15  C:ŭ��ֵ ����3�� ��һ�δ��� -30 ������ 80%
     * ����  Ѫ��   ŭ��ֵ
     * һ��Ѫ��Ϊ0 ��Ϸ����
     **/

    public static void main(String args[]) {
        //1:������������  ����
        Person person1 = new Person();
        person1.setBlood(100);
        person1.setAnger(0);
        person1.setName("����");

        Person person2 = new Person(100, "����", 0);
        //Ѫ������ һֱ��
        while (isPlaying) {
            if (aa % 2 == 0) {
                startPk(person1, person2);
            } else {
                startPk(person2, person1);
            }
        }
    }
    private static void startPk(Person p1, Person p2) {
        System.out.println("��\"" + p1.getName() + "\"����  A:ȭ  B:��  C:����");

        Scanner scanner = new Scanner(System.in);
        String zhao = scanner.nextLine();
        caseZhao(p2, zhao);

        if (p2.getBlood() <= 0) {
            isPlaying = false;
            System.out.println("��Ϸ����," + p1.getName() + "ʤ��!!!!");
        }
        aa++;
    }
    private static void caseZhao(Person p2, String zhao) {
        switch (zhao) {
            case "A":
                randomPk(p2,"ȭ:", 60, 10);
                break;
            case "B":
                randomPk(p2,"��:", 40, 15);
                break;
            case "C":
                randomPk(p2,"����:", 80, 30);
                break;
            default:
                System.out.println("�������");
                Scanner scanner = new Scanner(System.in);
                zhao = scanner.nextLine();
                caseZhao(p2, zhao);
                break;
        }
    }

    private static void randomPk(Person person2,String myZhao, int num, int numJ) {
        System.out.println(myZhao);
        int random;//1:����  2:û����
        random = (int) (Math.random() * 100);//����� 0 -- 1  0--60
        if (random <= num) {
            int blood = person2.getBlood();
            blood -= numJ;
            person2.setBlood(blood);
            System.out.println("������!" + person2.getName() + "Ѫ��Ϊ" + person2.getBlood());
        } else {
            System.out.println("û����!");
        }
    }
}
