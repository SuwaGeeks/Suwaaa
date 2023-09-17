-- CreateTable
CREATE TABLE `BenefitHistory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `benefitId` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `BenefitHistory` ADD CONSTRAINT `BenefitHistory_benefitId_fkey` FOREIGN KEY (`benefitId`) REFERENCES `Benefits`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BenefitHistory` ADD CONSTRAINT `BenefitHistory_email_fkey` FOREIGN KEY (`email`) REFERENCES `Users`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;
