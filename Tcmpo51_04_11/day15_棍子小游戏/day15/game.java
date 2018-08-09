import entity.Person;

import java.util.Scanner;

public class MyGame {
    private static boolean isPlaying = true;
    private static int aa = 0;

    /**
     * 面向对象思想的游戏
     * 1:八神  2:大蛇
     * 这两个人对打
     * 血量 100
     * 招 A:拳  B:腿  C:大招
     * A:命中率 60% -10 B:40% -15  C:怒气值 命中3次 放一次大招 -30 命中率 80%
     * 名字  血量   怒气值
     * 一方血量为0 游戏结束
     **/

    public static void main(String args[]) {
        //1:创建两个对象  八神
        Person person1 = new Person();
        person1.setBlood(100);
        person1.setAnger(0);
        person1.setName("八神");

        Person person2 = new Person(100, "大蛇", 0);
        //血量存在 一直打
        while (isPlaying) {
            if (aa % 2 == 0) {
                startPk(person1, person2);
            } else {
                startPk(person2, person1);
            }
        }
    }
    private static void startPk(Person p1, Person p2) {
        System.out.println("请\"" + p1.getName() + "\"出招  A:拳  B:腿  C:大招");

        Scanner scanner = new Scanner(System.in);
        String zhao = scanner.nextLine();
        caseZhao(p2, zhao);

        if (p2.getBlood() <= 0) {
            isPlaying = false;
            System.out.println("游戏结束," + p1.getName() + "胜利!!!!");
        }
        aa++;
    }
    private static void caseZhao(Person p2, String zhao) {
        switch (zhao) {
            case "A":
                randomPk(p2,"拳:", 60, 10);
                break;
            case "B":
                randomPk(p2,"腿:", 40, 15);
                break;
            case "C":
                randomPk(p2,"大招:", 80, 30);
                break;
            default:
                System.out.println("请出正着");
                Scanner scanner = new Scanner(System.in);
                zhao = scanner.nextLine();
                caseZhao(p2, zhao);
                break;
        }
    }

    private static void randomPk(Person person2,String myZhao, int num, int numJ) {
        System.out.println(myZhao);
        int random;//1:打中  2:没打中
        random = (int) (Math.random() * 100);//随机数 0 -- 1  0--60
        if (random <= num) {
            int blood = person2.getBlood();
            blood -= numJ;
            person2.setBlood(blood);
            System.out.println("打中了!" + person2.getName() + "血量为" + person2.getBlood());
        } else {
            System.out.println("没打中!");
        }
    }
}
